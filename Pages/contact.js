// RELOAD
history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};

// ================== CURSOR + CODE DROPS ==================//
const cursor = document.querySelector('.cursor');
const drops = document.querySelector('.code-drops');
const typingElement = document.getElementById('typing');
const introElement = document.getElementById('intro-text');

// Typing
const part1 = "Hi, I'm ";
const name = 'Muhammad Soban Sarmad';
const roles = [
    "AI & ML Engineer",
    "Application Developer",
    "Python Engineer",
    "UI/UX Designer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Expert",
    "Agentic AI Developer",
    "System Developer",
    "Tech Innovator",
    "Problem Solver"];
let i = 0, j = 0;
let roleIndex = 0, charIndex = 0;

function typeIntro() {
    if (i < part1.length) {
        introElement.innerHTML += part1.charAt(i++);
        setTimeout(typeIntro, 70);
    } else {
        typeName();
    }
}

function typeName() {
    if (j < name.length) {
        introElement.innerHTML = part1 + `<span class="name">${name.substring(0, j + 1)}</span>`;
        j++;
        setTimeout(typeName, 70);
    } else {
        setTimeout(() => { startRoles(); }, 600);
    }
}

function startRoles() {
    typeRole();
}

function typeRole() {
    const txt = roles[roleIndex];
    if (charIndex < txt.length) {
        typingElement.textContent += txt.charAt(charIndex++);
        setTimeout(typeRole, 90);
    } else {
        setTimeout(eraseRole, 1200);
    }
}

function eraseRole() {
    const txt = roles[roleIndex];
    if (charIndex > 0) {
        typingElement.textContent = txt.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, 45);
    } else {
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeRole, 300);
    }
}

// ================= CODE SNIPPETS =================

const snippets = [

    // ================= HTML =================
    '<html></html>',
    '<body></body>',
    '<div class="container"></div>',
    '<section id="hero"></section>',
    '<h1>Hello World</h1>',
    '<button>Click Me</button>',
    '<input type="text">',
    '<canvas></canvas>',
    '<video autoplay muted loop></video>',
    '<nav class="navbar"></nav>',
    '<footer></footer>',
    '<img src="ai.png">',
    '<form action=""></form>',
    '<meta charset="UTF-8">',
    '<link rel="stylesheet">',

    // ================= CSS =================
    'display: flex;',
    'display: grid;',
    'justify-content: center;',
    'align-items: center;',
    'position: absolute;',
    'position: relative;',
    'overflow: hidden;',
    'backdrop-filter: blur(20px);',
    'box-shadow: 0 0 20px #38bdf8;',
    'transform: translateY(-10px);',
    'transition: 0.4s ease;',
    'border-radius: 20px;',
    'opacity: 0.8;',
    'z-index: 999;',
    'grid-template-columns: repeat(3,1fr);',
    'animation: float 4s infinite;',
    'background: linear-gradient();',
    'font-size: clamp(1rem,2vw,3rem);',
    'letter-spacing: 2px;',
    'cursor: pointer;',

    // ================= JAVASCRIPT =================
    'const app = () => {}',
    'let score = 100;',
    'document.querySelector()',
    'document.getElementById()',
    'addEventListener("click")',
    'window.onload = init;',
    'console.log("AI Running")',
    'setTimeout(() => {}, 1000)',
    'setInterval(update, 16)',
    'Promise.resolve()',
    'async function fetchData() {}',
    'await response.json()',
    'fetch("/api/data")',
    'localStorage.setItem()',
    'JSON.stringify(data)',
    'JSON.parse(response)',
    'Math.random()',
    'Array.map()',
    'Array.filter()',
    'Array.reduce()',
    'new Date()',
    'performance.now()',
    'requestAnimationFrame()',
    'window.innerWidth',
    'window.scrollY',

    // ================= PYTHON =================
    'import numpy as np',
    'import pandas as pd',
    'import matplotlib.pyplot as plt',
    'import seaborn as sns',
    'import cv2',
    'import os',
    'import tensorflow as tf',
    'import torch',
    'import sklearn',
    'from flask import Flask',
    'from django.shortcuts import render',
    'print("Hello AI")',
    'def predict():',
    'class NeuralNet():',
    'for i in range(10):',
    'while True:',
    'try:\n except:',
    'lambda x: x * 2',
    'list comprehension',
    'np.array([1,2,3])',
    'pd.DataFrame(data)',
    'df.head()',
    'df.describe()',
    'model.fit(X, y)',
    'model.predict(X_test)',
    'accuracy_score(y,y_pred)',
    'train_test_split(X,y)',
    'RandomForestClassifier()',
    'LinearRegression()',
    'KMeans(n_clusters=3)',
    'SVC(kernel="rbf")',

    // ================= MACHINE LEARNING =================
    'Feature Engineering',
    'Data Cleaning',
    'Model Training',
    'Model Evaluation',
    'Confusion Matrix',
    'Cross Validation',
    'Hyperparameter Tuning',
    'Gradient Descent',
    'Decision Tree',
    'Random Forest',
    'Support Vector Machine',
    'Naive Bayes',
    'KNN Algorithm',
    'Clustering Model',
    'Classification Model',
    'Regression Analysis',
    'AI Automation',
    'Smart Prediction',
    'Real-Time Inference',
    'Data Pipeline',

    // ================= DEEP LEARNING =================
    'torch.tensor(data)',
    'nn.Conv2d(3,64,3)',
    'nn.Linear(128,64)',
    'ReLU()',
    'Softmax(dim=1)',
    'Dropout(0.5)',
    'optimizer = Adam()',
    'loss.backward()',
    'torch.no_grad()',
    'epochs = 100',
    'batch_size = 32',
    'CNN Model',
    'RNN Architecture',
    'LSTM Network',
    'Transformer Model',
    'Attention Mechanism',
    'Backpropagation',
    'Activation Function',
    'Batch Normalization',
    'Neural Network',

    // ================= COMPUTER VISION =================
    'cv2.imread("image.jpg")',
    'cv2.VideoCapture(0)',
    'cv2.cvtColor(img)',
    'cv2.imshow("frame")',
    'face_detection()',
    'YOLO Object Detection',
    'Image Segmentation',
    'Edge Detection',
    'Facial Recognition',
    'Pose Estimation',
    'OpenCV Processing',
    'Computer Vision',
    'Image Classification',
    'Tracking Algorithm',
    'Live Camera Feed',

    // ================= DATA SCIENCE =================
    'Data Analytics',
    'Big Data Processing',
    'Pandas GroupBy',
    'NumPy Reshape',
    'Matplotlib Graph',
    'Data Visualization',
    'Statistical Analysis',
    'Correlation Matrix',
    'Dataset Balancing',
    'Feature Scaling',
    'Normalization',
    'Data Wrangling',
    'Missing Value Handling',
    'Exploratory Data Analysis',

    // ================= DATABASE =================
    'SELECT * FROM users;',
    'INSERT INTO table VALUES()',
    'UPDATE users SET name="AI"',
    'DELETE FROM logs',
    'CREATE TABLE students',
    'MongoDB.find()',
    'db.collection.insertOne()',
    'SQL JOIN tables',
    'Firebase Authentication',
    'SQLite Database',
    'MySQL Connection',
    'Database Query',
    'API Integration',
    'Cloud Database',

    // ================= WEB DEVELOPMENT =================
    'React Component',
    'Vue Application',
    'Angular Module',
    'Node.js Server',
    'Express Middleware',
    'REST API',
    'GraphQL Query',
    'Frontend Animation',
    'Responsive Design',
    'Tailwind CSS',
    'Bootstrap Layout',
    'Glassmorphism UI',
    'Dark Mode Interface',
    'Mobile Responsive',
    'Sticky Navigation',

    // ================= CYBER SECURITY =================
    'JWT Authentication',
    'Password Hashing',
    'AES Encryption',
    'Secure API',
    'Firewall Enabled',
    'Cyber Defense',
    'OAuth Login',
    '2FA Verification',
    'Data Protection',
    'Security Protocol',

    // ================= CLOUD =================
    'AWS Lambda',
    'Google Cloud',
    'Azure AI',
    'Docker Container',
    'Kubernetes Cluster',
    'CI/CD Pipeline',
    'Cloud Deployment',
    'Serverless Architecture',
    'Virtual Machine',
    'Linux Server',

    // ================= MOBILE DEVELOPMENT =================
    'KivyMD Application',
    'Flutter Widget',
    'React Native',
    'Android Studio',
    'iOS Development',
    'Cross Platform App',
    'Mobile UI',
    'App Deployment',
    'Push Notifications',
    'Offline Storage',

    // ================= GAME DEV =================
    'Unity Engine',
    'Unreal Engine',
    'Game Physics',
    'Player Movement',
    'Collision Detection',
    '3D Rendering',
    'Shader Programming',
    'FPS Counter',
    'Game Loop',
    'Sprite Animation',

    // ================= JAVA =================
    'public class Main {}',
    'System.out.println("Hello")',
    'ArrayList<String>()',
    'HashMap<Key,Value>()',
    'try { } catch(Exception e) {}',
    'Spring Boot',
    'Java Swing',
    'JDBC Connection',

    // ================= C++ =================
    '#include<iostream>',
    'using namespace std;',
    'int main() {}',
    'vector<int> nums;',
    'cin >> value;',
    'cout << "AI";',
    'class Student {}',
    'pointer arithmetic',
    'STL Algorithms',

    // ================= C =================
    '#include<stdio.h>',
    'printf("Hello")',
    'scanf("%d",&x)',
    'malloc(sizeof(int))',
    'struct Node',
    'file handling in C',

    // ================= PHP =================
    '<?php echo "AI"; ?>',
    '$conn = mysqli_connect()',
    'Laravel Framework',
    'PHP Session',
    'POST Request',

    // ================= RUBY =================
    'puts "Hello World"',
    'Ruby on Rails',
    'gem install rails',

    // ================= GO =================
    'package main',
    'fmt.Println("AI")',
    'goroutine running',
    'Go Fiber API',

    // ================= RUST =================
    'fn main() {}',
    'println!("Hello")',
    'ownership rules',
    'cargo build',

    // ================= AI TERMS =================
    'Artificial Intelligence',
    'Machine Learning',
    'Deep Learning',
    'Generative AI',
    'Agentic AI',
    'Large Language Model',
    'Natural Language Processing',
    'Speech Recognition',
    'Recommendation System',
    'Autonomous Agent',
    'AI Assistant',
    'Predictive Analytics',
    'Intelligent Automation',
    'Cloud Intelligence',
    'Edge AI',
    'Quantum Computing',
    'Digital Transformation',
    'Human Computer Interaction',
    'Smart Systems',
    'Innovation Pipeline',

    // ================= EXTRA MODERN TERMS =================
    'Web3 Development',
    'Blockchain Network',
    'Crypto Wallet',
    'NFT Marketplace',
    'Metaverse Experience',
    'AR/VR Interface',
    'Mixed Reality',
    'Spatial Computing',
    'Smart Contracts',
    'Decentralized Apps',

    // ================= RANDOM TECH =================
    'sudo apt update',
    'git commit -m "update"',
    'npm install',
    'pip install tensorflow',
    'yarn dev',
    'docker-compose up',
    'ssh root@server',
    'chmod 777 file',
    'python manage.py runserver',
    'firebase deploy',

    // ================= UI/UX =================
    'Figma Design',
    'User Experience',
    'User Interface',
    'Interactive Prototype',
    'Micro Interactions',
    'Motion Design',
    'Minimal Design',
    'Creative Layout',
    'Accessibility UI',
    'Modern Dashboard'

];

const colors = ['#38bdf8', '#a78bfa', '#f472b6', '#facc15', '#34d399'];
let lastDrop = 0;

window.addEventListener('pointermove', (e) => {
    const x = e.clientX, y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    const now = performance.now();
    // moderate spawn rate (lower is faster)
    if (now - lastDrop > 140) {
        lastDrop = now;
        spawnDrop(x, y);
    }
});

window.addEventListener('pointerdown', () => cursor.classList.add('active'));
window.addEventListener('pointerup', () => cursor.classList.remove('active'));

function spawnDrop(x, y) {
    const el = document.createElement('span');
    el.className = 'code-drop';
    el.textContent = snippets[Math.floor(Math.random() * snippets.length)];
    el.style.left = (x + (Math.random() - 0.5) * 60) + 'px';
    el.style.top = (y + (Math.random() - 0.5) * 20) + 'px';
    const color = colors[Math.floor(Math.random() * colors.length)];
    el.style.color = color;
    el.style.filter = `drop-shadow(0 0 8px ${color})`;
    el.style.fontSize = (Math.random() * 1.6 + 0.8) + 'rem';
    drops.appendChild(el);
    el.addEventListener('animationend', () => el.remove());
}
