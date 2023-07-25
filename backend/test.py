from utils import get_db_handle

# Параметры подключения к MongoDB
db_name = 'my_mongodb_database'
host = 'localhost'
port = 27017
username = 'your_username'
password = 'your_password'

# Получаем объекты для работы с базой данных и клиентом
db_handle, client = get_db_handle(db_name, host, port, username, password)
