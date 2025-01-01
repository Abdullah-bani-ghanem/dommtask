// مصفوفة أسماء الفواكه
const fruits = ["apple.png", 'banana.png', 'orange.jpg', 'strawberry.jpg', 'pineapple.jpg'];

// إنشاء عنصر <div> ليكون الحاوية 
const container = document.createElement('div');

container.id = 'fruit-container';
document.body.appendChild(container); // إضافته إلى الصفحة
const di=document.getElementById("fruit-container");
const ul = document.createElement('ul');
di.appendChild(ul);
for(let i=0;i<fruits.length;i++){
let arr =["apple","banana","orange","strawberry","pineapple"];

let par=document.createElement("p");
let txt=document.createTextNode(arr[i]);
par.appendChild(txt);

ul.appendChild(par);
const li=document.createElement("li");
ul.appendChild(li);
const img =document.createElement("img");
li.appendChild(img);
img.src=fruits[i];
img.style.width="100px";
}



/////////////////////////////////q2




let n=prompt("enter number");
parseInt(n);
let a=[1,2,3,4,5,6];
ind(a,n);
function ind(arr,number){
for(let i=0; i<a.length ;i++){
    if(n==a[i]){
        console.log(i);
        break;
    }
    else if(number!=a[i] && i==arr.length-1){
        console.log(-1);
    }
}

}











































// إضافة بعض التنسيقات الأساسية للحاوية
// const style = document.createElement('style');
// style.textContent = `
//     ul {
    
//         padding: 0;
//     }
//     li {
//         display: flex;
//         align-items: center;
//         margin: 10px;
//         font-size: 18px;
//     }
//     img {
//         margin-right: 10px;
//         border-radius: 50%;
//     }
// `;
// document.head.appendChild(style);

// إنشاء عنصر <ul>

// إضافة عناصر الفاكهة
// fruits.forEach(fruit => {
    //     // إنشاء عنصر <li>
    //     const liElement = document.createElement('li');
    
    //     // إنشاء صورة لكل فاكهة
    //     const imgElement = document.createElement('img');
    //     imgElement.src = `https://via.placeholder.com/50?text=${fruit}`; // رابط صورة مؤقت
    //     imgElement.alt = `${fruit} image`;
    
    //     // إضافة اسم الفاكهة
    //     const textNode = document.createTextNode(fruit);
    
    //     // إدخال الصورة والنص داخل <li>
    //     liElement.appendChild(imgElement);
    //     liElement.appendChild(textNode);
    
    //     // إضافة <li> إلى <ul>
    //     ulElement.appendChild(liElement);
    // });
    
    // إدخال <ul> إلى صفحة HTML داخل الحاوية
    // container.appendChild(ulElement);


