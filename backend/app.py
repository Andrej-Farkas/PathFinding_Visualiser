from flask import Flask, jsonify
from pathfinding import dummy_pathfinding

app = Flask(__name__)

@app.route('/')
def home():
    return jsonify(message="Welcome to the Pathfinding Visualizer API")

@app.route('/pathfinding')
def pathfinding():
    result = dummy_pathfinding()
    return jsonify(result=result)

if __name__ == '__main__':
    app.run(debug=True)
