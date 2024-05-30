from flask import Flask, request, jsonify
import torch
import torch.nn as nn

app = Flask(__name__)

# Example PyTorch model for illustration
class SimpleNN(nn.Module):
    def __init__(self):
        super(SimpleNN, self).__init__()
        self.layer1 = nn.Linear(10, 5)
        self.relu = nn.ReLU()
        self.layer2 = nn.Linear(5, 2)

    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = selflayer2(x)
        return x

model = SimpleNN()
model.eval()

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    inputs = torch.tensor(data['inputs'])
    with torch.no_grad():
        outputs = model(inputs)
    return jsonify({'outputs': outputs.tolist()})

@app.route('/')
def home():
    return "Hello, Cyber World!"

if __name__ == '__main__':
    app.run(debug=True)