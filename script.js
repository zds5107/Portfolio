function getYear(){
    const date = new Date();
    const year = date.getFullYear();
    document.getElementById("copyright").textContent = `© ${year} Zachary Stopper. All rights reserved.`
}

getYear();
