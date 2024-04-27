   let intervalId;

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to create a new section
    function createSection() {
        const section = document.createElement('div');
        section.className = 'section';
        section.style.backgroundColor = getRandomColor();
        section.textContent = 'Section ' + document.getElementsByClassName('section').length;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function() {
            section.remove();
        };

        section.appendChild(deleteBtn);
        document.querySelector('.container').prepend(section);
    }

    document.getElementById('startBtn').addEventListener('click', function() {
        intervalId = setInterval(createSection, 1000);
    });

    document.getElementById('stopBtn').addEventListener('click', function() {
        clearInterval(intervalId);
    });