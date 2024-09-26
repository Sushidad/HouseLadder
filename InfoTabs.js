document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.getElementById('tabs');
    const contentContainer = document.getElementById('tab-content');

    const filesFolder = 'https://raw.githubusercontent.com/YourGitHubUsername/YourRepo/main/Infotabs/'; // Update with the correct folder path

    // List of files (could be dynamic in the future)
    const files = ['file1.txt', 'file2.txt', 'file3.txt']; // Add more as needed

    // Create tabs dynamically based on filenames
    files.forEach(file => {
        const tab = document.createElement('button');
        const tabName = file.replace('.txt', ''); // Tab name based on filename
        tab.innerText = tabName;
        tab.classList.add('tab-button');

        // On-click, fetch the corresponding file content
        tab.addEventListener('click', () => {
            fetch(filesFolder + file)
                .then(response => response.text())
                .then(data => {
                    contentContainer.innerText = data; // Set content
                })
                .catch(err => {
                    contentContainer.innerText = "Error loading file.";
                });
        });

        tabsContainer.appendChild(tab);
    });

    // Trigger first tab click automatically
    if (files.length > 0) {
        tabsContainer.firstChild.click();
    }
});
