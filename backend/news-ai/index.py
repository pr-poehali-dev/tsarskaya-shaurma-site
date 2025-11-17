import json
import os
from typing import Dict, Any
from openai import OpenAI

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Сбор актуальных новостей с помощью ChatGPT и отправка их владельцу
    Args: event - dict с httpMethod и queryStringParameters (topic, count)
          context - object с request_id
    Returns: HTTP response с новостями в JSON формате
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }
    
    if method != 'GET' and method != 'POST':
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    api_key = os.environ.get('OPENAI_API_KEY')
    if not api_key:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'OpenAI API key not configured'}),
            'isBase64Encoded': False
        }
    
    params = event.get('queryStringParameters', {}) or {}
    topic = params.get('topic', 'технологии и ИИ')
    count = int(params.get('count', '5'))
    
    client = OpenAI(api_key=api_key)
    
    prompt = f"""Собери {count} самых актуальных и интересных новостей на тему "{topic}" за последние 24 часа.

Для каждой новости укажи:
1. Заголовок (короткий и ёмкий)
2. Краткое описание (2-3 предложения)
3. Источник (если известен)
4. Время (примерное)

Верни результат строго в JSON формате:
{{
  "news": [
    {{
      "title": "Заголовок новости",
      "description": "Краткое описание новости...",
      "source": "Название источника",
      "time": "2 часа назад"
    }}
  ]
}}"""
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "Ты помощник для сбора новостей. Отвечай только в JSON формате."},
            {"role": "user", "content": prompt}
        ],
        temperature=0.7,
        max_tokens=2000
    )
    
    news_text = response.choices[0].message.content
    
    news_text_clean = news_text.strip()
    if news_text_clean.startswith('```json'):
        news_text_clean = news_text_clean[7:]
    if news_text_clean.startswith('```'):
        news_text_clean = news_text_clean[3:]
    if news_text_clean.endswith('```'):
        news_text_clean = news_text_clean[:-3]
    news_text_clean = news_text_clean.strip()
    
    news_data = json.loads(news_text_clean)
    
    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        'body': json.dumps({
            'success': True,
            'topic': topic,
            'news': news_data.get('news', []),
            'timestamp': context.request_id
        }, ensure_ascii=False),
        'isBase64Encoded': False
    }
