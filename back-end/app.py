from flask import Flask

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def hello_world():
    return 'Hello, World!'

@app.route('/cards', methods=['GET'])
def cards():
    cards = [ 'A', '1', '2' ]
    return 'HAACHOO'

if __name__ == '__main__':
    app.run(debug=True)

