// ================= RELOAD =================
history.scrollRestoration = "manual";

window.onload = () => {
    window.scrollTo(0, 0);
};
// ================= CHATBOT =================

const chatBtn = document.getElementById("chatbot-btn");
const chatbot = document.getElementById("chatbot");
const closeChat = document.getElementById("close-chat");
const chatBody = document.getElementById("chat-body");

chatBtn.addEventListener("click", (e) => {
    e.preventDefault();
    chatbot.classList.add("show");
    chatbot.style.display = "flex";
});

closeChat.addEventListener("click", () => {
    chatbot.classList.remove("show");

    setTimeout(() => {
        chatbot.style.display = "none";
    }, 200);
});


// ================= SEND MESSAGE =================

function sendMessage(){

    let input = document.getElementById("userInput");
    let message = input.value;

    if(message.trim() === "") return;

    chatBody.innerHTML += `<p class="user-msg fade">${message}</p>`;

    input.value = "";

    let botMsg = document.createElement("p");
    botMsg.className = "bot-msg fade";
    chatBody.appendChild(botMsg);

    let reply = getBotReply(message.toLowerCase());

    typeMessage(botMsg, reply, 15);

    chatBody.scrollTop = chatBody.scrollHeight;
}


// ================= TYPE ANIMATION =================

function typeMessage(element, text, speed){

    let i = 0;
    element.innerHTML = "";

    function typing(){
        if(i < text.length){
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

// ================= CHATBOT COMPLETE OVERHAUL =================

function getBotReply(msg){
    msg = msg.toLowerCase();

    // ================= GREETINGS =================
    if(msg.includes("hello") || msg.includes("hi") || msg.includes("hey")){
        return "👋 Hey! Welcome to Tech Soban's Portfolio! I'm your AI Assistant. Ask about projects, skills, services, or contact. What interests you?";
    }
    if(msg.includes("how are you") || msg.includes("wassup")){
        return "🤖 Doing great! 🚀 Ready to tell you about Soban's amazing AI projects. What would you like to know?";
    }

    // ================= ABOUT =================
    if(msg.includes("who are you") || msg.includes("what are you")){
        return "🤖 I'm an AI assistant representing Muhammad Soban Sarmad - an AI Engineer & Full Stack Developer here to answer all your questions!";
    }
    if(msg.includes("about soban") || msg.includes("tell me about him")){
        return "👨‍💻 Muhammad Soban Sarmad: AI & Full Stack Developer\n🤖 AI/ML Expert\n🎥 Computer Vision\n💻 Web Developer\n🎨 UI/UX Designer\nPassionate about building intelligent systems that solve real problems!";
    }

    // ================= SKILLS - GENERAL =================
    if(msg.includes("skill") || msg.includes("tech stack") || msg.includes("expertise")){
        return "💡 Soban's Skills:\n🐍 Python (95%)\n🤖 Machine Learning (88%)\n🎥 Computer Vision (82%)\n📊 Data Analysis (85%)\n🌐 Web Dev (80%)\n🎨 UI/UX (85%)\n📱 Mobile Dev (75%)\nWhat specific skill interests you?";
    }
    if(msg.includes("python")){
        return "🐍 Python Expertise:\n✅ Data Science (NumPy/Pandas)\n✅ Machine Learning\n✅ Deep Learning (TensorFlow/PyTorch)\n✅ Computer Vision (OpenCV)\n✅ Web Dev (Flask)\n✅ Automation\nSoban uses Python for 95% of projects!";
    }
    if(msg.includes("ai") || msg.includes("machine learning")){
        return "🧠 AI & Machine Learning:\n✅ Supervised & Unsupervised Learning\n✅ Deep Learning (CNN, RNN, LSTM)\n✅ NLP & Generative AI\n✅ Computer Vision\n✅ Model Deployment\nWhat ML topic interests you?";
    }
    if(msg.includes("computer vision") || msg.includes("cv")){
        return "🎥 Computer Vision Skills:\n✅ Face Recognition & Detection\n✅ Object Detection (YOLO)\n✅ Image Processing\n✅ Real-time Video Processing\n✅ Pose Estimation\nBuilt many CV projects with OpenCV!";
    }
    if(msg.includes("web") || msg.includes("frontend") || msg.includes("backend")){
        return "🌐 Full Stack Development:\n✅ Frontend: JavaScript, React, HTML/CSS\n✅ Backend: Flask, REST APIs\n✅ Databases: SQL, MongoDB\n✅ Responsive Design\n✅ Cloud Deployment\nBuilds complete web solutions!";
    }
    if(msg.includes("ui") || msg.includes("ux") || msg.includes("design")){
        return "🎨 UI/UX Design:\n✅ Figma Prototyping\n✅ User Interface Design\n✅ Responsive Layouts\n✅ Glassmorphism & Modern UI\n✅ Micro-interactions\nSoban has UI/UX internship experience!";
    }
    if(msg.includes("mobile") || msg.includes("app")){
        return "📱 Mobile Development:\n✅ KivyMD Framework\n✅ Cross-platform Apps\n✅ Mobile UI Design\n✅ Performance Optimization\n✅ App Deployment\nBuilds native & cross-platform apps!";
    }

    // ================= PROJECTS =================
    if(msg.includes("project") || msg.includes("work")){
        return "🚀 Featured AI Projects:\n1. 🏠 Real Estate Price Prediction\n2. 📸 Face Recognition Attendance\n3. 🤖 AI Application Tracking (ATS)\n4. 💬 AI Text Based Interviewer\n5. 🔥 Fire Detection System\n6. 📹 Image & Video Compressor\nWhich project interests you?";
    }
    if(msg.includes("real estate")){
        return "🏠 Real Estate Price Prediction:\nUses ML to predict plot prices accurately.\nTech: Python, Scikit-Learn, Data Analysis\nPerfect for property investors!";
    }
    if(msg.includes("face recognition") || msg.includes("attendance")){
        return "📸 Face Recognition Attendance:\nAutomated attendance with high accuracy.\nTech: Python, OpenCV, ML Models\nEliminates manual attendance!";
    }
    if(msg.includes("ats") || msg.includes("application tracking")){
        return "🤖 AI Application Tracking System:\nAI-powered resume screening & ranking.\nTech: Python, NLP, Flask, SQL\nAutomates recruitment workflow!";
    }
    if(msg.includes("interviewer")){
        return "💬 AI Text Based Interviewer:\nIntelligent interviews with feedback.\nTech: Python, NLP, LLMs\nGreat for interview prep!";
    }
    if(msg.includes("fire detection")){
        return "🔥 Fire Detection System:\nReal-time fire & smoke detection.\nTech: Python, OpenCV, YOLO\nSaves lives and property!";
    }
    if(msg.includes("compressor") || msg.includes("image compression")){
        return "📹 Image & Video Compressor:\nSmart media compression tool.\nTech: Python, FFmpeg, AI encoding\nPerfect for web & social media!";
    }

    // ================= EXPERIENCE & EDUCATION =================
    if(msg.includes("experience")){
        return "💼 Experience:\n• Multiple AI projects completed\n• UI/UX Design Internship\n• Full Stack Development\n• Data Science Projects\n• Freelance Projects\n• 6+ major portfolio projects";
    }
    if(msg.includes("internship")){
        return "🎓 Internship:\n• UI/UX Design Internship\n• Practical AI Development\n• Real-world Projects\n• Team Collaboration\nHands-on experience across domains!";
    }
    if(msg.includes("education") || msg.includes("degree")){
        return "🎓 Education:\n• BS Computer Science (Completed)\n• AI & ML Specialization\n• Data Science Focus\n• Full Stack Training\nStrong academic + practical foundation!";
    }

    // ================= SERVICES =================
    if(msg.includes("service") || msg.includes("offer")){
        return "🛠️ Services:\n1. 🤖 AI/ML Solutions\n2. 💬 Chatbot Development\n3. 🌐 Web Application Dev\n4. 🎥 Computer Vision\n5. 📱 Mobile Apps\n6. 🎨 UI/UX Design\n7. 📊 Data Analysis\n8. 🔧 Automation\nWant to work together?";
    }
    if(msg.includes("price") || msg.includes("rate") || msg.includes("cost")){
        return "💰 Pricing:\n• Custom projects: Discuss rates\n• Freelance: Competitive\n• Available on Fiverr\n• Flexible packages\n📧 Email for quotes!";
    }

    // ================= CONTACT =================
    if(msg.includes("contact") || msg.includes("hire") || msg.includes("email") || msg.includes("phone") || msg.includes("whatsapp") || msg.includes("linkedin") || msg.includes("github")){
        return "📞 Contact Information:\n📧 Email: techsoban.ai@gmail.com\n💬 WhatsApp: +92 331 6277248\n🔗 LinkedIn: linkedin.com/in/muhammad-soban-sarmad\n🐙 GitHub: github.com/Muhammad-Soban-Sarmad\n📸 Instagram: @techsoban.ai\n💼 Fiverr: fiverr.com/m_soban_sarmad\n\n🎯 Fastest: WhatsApp!";
    }
    if(msg.includes("freelance") || msg.includes("available")){
        return "💼 Freelance: AVAILABLE! ✅\n• AI/ML Projects\n• Web Development\n• Computer Vision\n• Full Stack\n• UI/UX Collaboration\n📱 +92 331 6277248\n📧 techsoban.ai@gmail.com";
    }

    // ================= TECH STACK =================
    if(msg.includes("tech") || msg.includes("framework") || msg.includes("library")){
        return "🔧 Tech Stack:\n🐍 Python, Flask, Django\n🤖 TensorFlow, PyTorch, Scikit-Learn\n🎥 OpenCV, YOLO\n💻 JavaScript, React, HTML/CSS\n📊 Pandas, NumPy, Matplotlib\n🗄️ SQL, MongoDB, Firebase\n☁️ AWS, Google Cloud\n🎨 Figma, Adobe XD";
    }

    // ================= GITHUB =================
    if(msg.includes("github") || msg.includes("code")){
        return "🐙 GitHub Profile:\n• All major projects on GitHub\n• Open to collaborations\n• Active contributor\n• Clean code & documentation\n🔗 GitHub: github.com/Muhammad-Soban-Sarmad\nCheck out the projects & code!";
    }

    // ================= FUN & MOTIVATIONAL =================
    if(msg.includes("joke")){
        return "😄 Why did programmer quit? Didn't get arrays!\n🤖 Why glasses? Can't C#!\n🐍 Why bad jokes? Indented punchlines!\n😂 Keep coding! 🚀";
    }
    if(msg.includes("motivate") || msg.includes("motivation") || msg.includes("quote")){
        return "🔥 Motivation:\n💪 'Code is poetry in logic.'\n🚀 'AI is not future, it's now.'\n📈 'Every error is a lesson.'\n🧠 'Keep building, keep learning!'\n💡 You got this! 🎯";
    }

    // ================= HELP =================
    if(msg.includes("help") || msg.includes("menu")){
        return "📖 I can help with:\n• About Soban & Background\n• Skills & Expertise\n• Projects & Portfolio\n• Services Offered\n• Contact Information\n• Tech Stack Details\n• Motivation & Tips\nWhat would you like to know?";
    }

    // ================= COLLABORATION =================
    if(msg.includes("collaborate") || msg.includes("partner") || msg.includes("team")){
        return "🤝 Collaboration:\n• Open to team projects\n• Startup opportunities\n• Research partnerships\n• Open source contributions\n📧 Email: techsoban.ai@gmail.com\n💬 WhatsApp: +92 331 6277248\nLet's build something amazing!";
    }

    // ================= TIPS & ADVICE =================
    if(msg.includes("tip") || msg.includes("advice")){
        return "💡 Tech Tips:\n✅ Start small, iterate fast\n✅ Clean code is readable code\n✅ Test thoroughly\n✅ Document everything\n✅ Build real projects\n✅ Learn new tech\n✅ Collaborate\n✅ Never stop learning!";
    }

    // ================= DEFAULT =================
    return "🤖 Great question! Try asking:\n• About skills & projects\n• Services offered\n• Contact info\n• AI/ML topics\n• Motivation & tips\n📧 Or email: techsoban.ai@gmail.com";
}


document.getElementById("userInput").addEventListener("keydown", function(event){

    if(event.key === "Enter" && !event.shiftKey){
        event.preventDefault();
        sendMessage();
    }

});

// ================= MOBILE MENU TOGGLE =================

const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

// open / close menu
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("show");
});

// close menu when clicking overlay
overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("show");
});

// auto hide when any link is clicked
const navLinks = document.querySelectorAll("#mobileMenu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        overlay.classList.remove("show");

    });

});

// ================= CURSOR + CODE DROPS =================

const cursor = document.querySelector('.cursor');
const drops = document.querySelector('.code-drops');

// ================= TYPING EFFECT =================

const typingElement = document.getElementById('typing');
const introElement = document.getElementById('intro-text');

// clear existing text from HTML
introElement.innerHTML = "";
typingElement.innerHTML = "";

const part1 = "Hi, I'm ";
const name = 'Muhammad Soban Sarmad';

const roles = [
    "AI & ML Engineer",
    "Application Developer",
    "Python Engineer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Machine Learning Enthusiast",
    "Computer Vision Expert",
    "Agentic AI Developer",
    "System Developer",
    "Tech Innovator",
    "Problem Solver"
];

let i = 0;
let j = 0;

let roleIndex = 0;
let charIndex = 0;

// ================= INTRO TYPING =================

function typeIntro() {

    if (i < part1.length) {

        introElement.innerHTML += part1.charAt(i);

        i++;

        setTimeout(typeIntro, 70);

    } else {

        typeName();

    }

}

// ================= TYPING EFFECT =================
typeIntro();

// ================= NAME TYPING =================

function typeName() {

    if (j < name.length) {

        introElement.innerHTML =
            part1 +
            `<span class="name">${name.substring(0, j + 1)}</span>`;

        j++;

        setTimeout(typeName, 70);

    } else {

        setTimeout(() => {

            startRoles();

        }, 700);

    }

}

// ================= ROLE START =================

function startRoles() {

    typingElement.textContent = "";

    typeRole();

}

// ================= ROLE TYPING =================

function typeRole() {

    const txt = roles[roleIndex];

    if (charIndex < txt.length) {

        typingElement.textContent += txt.charAt(charIndex);

        charIndex++;

        setTimeout(typeRole, 90);

    } else {

        setTimeout(eraseRole, 1400);

    }

}

// ================= ROLE ERASING =================

function eraseRole() {

    const txt = roles[roleIndex];

    if (charIndex > 0) {

        typingElement.textContent =
            txt.substring(0, charIndex - 1);

        charIndex--;

        setTimeout(eraseRole, 45);

    } else {

        roleIndex = (roleIndex + 1) % roles.length;

        setTimeout(typeRole, 350);

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

// ================= COLORS =================

const colors = [
    '#38bdf8',
    '#a78bfa',
    '#f472b6',
    '#facc15',
    '#34d399'
];

let lastDrop = 0;

// ================= CURSOR FOLLOW =================

window.addEventListener('pointermove', (e) => {

    const x = e.clientX;
    const y = e.clientY;

    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';

    const now = performance.now();

    if (now - lastDrop > 140) {

        lastDrop = now;

        spawnDrop(x, y);

    }

});

// cursor click effect
window.addEventListener('pointerdown', () => {
    cursor.classList.add('active');
});

window.addEventListener('pointerup', () => {
    cursor.classList.remove('active');
});

// ================= CREATE CODE DROPS =================

function spawnDrop(x, y) {

    const el = document.createElement('span');

    el.className = 'code-drop';

    el.textContent =
        snippets[Math.floor(Math.random() * snippets.length)];

    el.style.left =
        (x + (Math.random() - 0.5) * 60) + 'px';

    el.style.top =
        (y + (Math.random() - 0.5) * 20) + 'px';

    const color =
        colors[Math.floor(Math.random() * colors.length)];

    el.style.color = color;

    el.style.filter =
        `drop-shadow(0 0 8px ${color})`;

    el.style.fontSize =
        (Math.random() * 1.6 + 0.8) + 'rem';

    drops.appendChild(el);

    el.addEventListener('animationend', () => {
        el.remove();
    });

}

// ================= ABOUT ME =================
const images = [
    "About_Images/IMG.jpg",
    "About_Images/IMG_1.jpg",
    "About_Images/IMG_2.jpg",
    "About_Images/IMG_3.jpg"
];

let index = 0;
const img = document.getElementById("aboutImage");

function changeImage(){
    img.style.opacity = 0;

    setTimeout(() => {
        index = (index + 1) % images.length;
        img.src = images[index];
        img.style.opacity = 1;
    }, 400);
}

setInterval(changeImage, 3000);

// ================= SKILL CIRCLES =================

const circles = document.querySelectorAll(".skill-circle");

circles.forEach(circle => {

    const percent = parseInt(
        circle.getAttribute("data-percent")
    );

    const progress = circle.querySelector(".progress");

    const radius = 60;

    const circumference = 2 * Math.PI * radius;

    progress.style.strokeDasharray = circumference;

    const offset =
        circumference - (percent / 100) * circumference;

    progress.style.strokeDashoffset = circumference;

    // AUTO COLOR USING PERCENTAGE

    let color = "#22c55e";

    if(percent >= 90){
        color = "#00ff15"; // GREEN
    }
    else if(percent >= 80){
        color = "#00ff8c"; // BLUE
    }
    else if(percent >= 70){
        color = "#00f7ff"; // BLUE
    }
    else if(percent >= 60){
        color = "#3b9ff6"; // BLUE
    }
    else if(percent >= 50){
        color = "#f6fa15"; // YELLOW
    }
    else if(percent >= 40){
        color = "#f9a216"; // ORANGE
    }
    else if(percent >= 30){
        color = "#f97316"; // ORANGE
    }
    else{
        color = "#ef4444"; // RED
    }

    progress.style.stroke = color;

    progress.style.filter =
        `drop-shadow(0 0 5px ${color})`;

    setTimeout(() => {
        progress.style.strokeDashoffset = offset;
    }, 300);

});


// ================= SHOW MORE =================

const showMoreBtn =
    document.getElementById("showMoreBtn");

const extraSkills =
    document.querySelectorAll(".extra-skill");

let expanded = false;

showMoreBtn.addEventListener("click", () => {

    expanded = !expanded;

    extraSkills.forEach(skill => {
        skill.classList.toggle("show");
    });

    showMoreBtn.textContent =
        expanded
        ? "Show Less"
        : "Show More";

});

// ================= EXPAND SERVICES =================

const panels = document.querySelectorAll(".service-panel");
const container = document.querySelector(".services-expand");

// expand on hover
panels.forEach(panel => {

    panel.addEventListener("mouseenter", () => {

        panels.forEach(p => {
            p.classList.remove("active");
        });

        panel.classList.add("active");

    });

});

// auto shrink when cursor leaves whole section
container.addEventListener("mouseleave", () => {

    panels.forEach(p => {
        p.classList.remove("active");
    });

});

// =============================
// GLOW CURSOR EFFECT
// =============================

(function(){

    const section =
    document.querySelector(".glow-section");

    const text =
    document.getElementById("glowText");

    const spotlight =
    document.getElementById("spotlight");

    if(!section || !text || !spotlight) return;

    section.addEventListener("mousemove",(e)=>{

        const rect =
        text.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        text.style.setProperty("--x", `${x}px`);
        text.style.setProperty("--y", `${y}px`);

        spotlight.style.left =
        `${e.clientX - section.getBoundingClientRect().left}px`;

        spotlight.style.top =
        `${e.clientY - section.getBoundingClientRect().top}px`;

        spotlight.style.opacity = "1";

    });

    section.addEventListener("mouseleave",()=>{

        spotlight.style.opacity = "0";

    });

})();