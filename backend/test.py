import os
from dotenv import load_dotenv

load_dotenv('../.env.dev')

print(os.getenv('MONGO_DB_NAME'))
print(os.getenv('MONGO_DB_HOST'))
print(os.getenv('MONGO_DB_PORT'))
print(os.getenv('MONGO_DB_USERNAME'))
print(os.getenv('MONGO_DB_PASSWORD'))
print(os.getenv('MONGO_DB_AUTH_MECHANISM'))
