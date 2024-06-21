fetch('data.json')
.then(res=>res.json())
.then(data=>{
handeldata(data);

})
function handeldata(flats)
{
const flat=document.getElementById("flats");
flats.forEach(myFlat => {
    let flat1 = createrow(myFlat);
    let flatdetal=addDetal(myFlat);
    flat.appendChild(flat1);
    flat.appendChild(flatdetal);
});

}

 function createrow(myFlat){
const row =document.createElement("tr");

for (let i = 0; i < 5; i++) {
    const cell=document.createElement("td");
    row.appendChild(cell)
    
}

row.children[0].textContent=` ${myFlat.city}`;


row.children[1].textContent=` ${myFlat.dital}`;


row.children[2].textContent=` ${myFlat.price} `;

const chek=document.createElement("input");
chek.setAttribute("type","checkbox");
chek.onclick=function(){


    chek.parentElement.parentElement.nextElementSibling.classList.toggle("hid");
}
row.children[3].appendChild(chek);

const radio=document.createElement("input");
radio.setAttribute("type","radio");
row.children[4].appendChild(radio);



return row;

}
//----------------------------
 function addDetal(myFlat)
 {
    const row =document.createElement("tr");
    row.classList.add("hid")
row.innerHTML= `
<td colspan="5" >
<div class="info">
<ul class="text">
    <li> المنطقة:${myFlat.aria} </li>
    <li>الطابق : ${myFlat.floor} </li>
    <li> الملكية:  ${myFlat.have} </li>
    <li> مفروشة :${myFlat.mafrosh} </li>
    <li> متوفر كراج :  ${myFlat.gar} </li>
    <li> مساحة البلكون   ${myFlat.masaha} </li>
</ul>
    <div class="photo">
<img src="${myFlat.img1}" width="150px">
<img src="${myFlat.img2}" width="150px">
    </div>
</ul>




</div>



</td>`

return row;


 }


        function validateForm() {
            // الحصول على قيم المدخلات
            var name = document.getElementById("name").value;
            var id = document.getElementById("id").value;
            var date = document.getElementById("date").value;
            var phone = document.getElementById("number").value;
            var email = document.getElementById("email").value;
            var captcha = document.getElementById("captcha").value;
            // الحصول على قيمة الرمز captcha الحقيقية
            var captchaValue = document.getElementById("captcha-image").alt;
            // انشاء متغير للتحقق من الصحة
            var valid = true;
            // التحقق من الاسم اذا كان يحتوي على احرف هجائية فقط باللغة العربية
            var namePattern = /^[أ-ي\s]+$/;
            if (!namePattern.test(name)) {
                alert("الاسم يجب أن يحتوي على أحرف هجائية فقط باللغة العربية");
                valid = false;
            }
            // التحقق من الرقم الوطني اذا كان يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة
            var idPattern = /^(01|02|03|04|05|06|07|08|09|10|11|12|13|14)\d{9}$/;
            if (!idPattern.test(id)) {
                alert("الرقم الوطني يجب أن يحتوي على 11 خانة والخانتين الاوليتين ترمزان الى المحافظة");
                valid = false;
            }
            // التحقق من تاريخ الولادة اذا كان يأخذ الشكل dd-mm-yyyy
            var datePattern = /^\d{2}-\d{2}-\d{4}$/;
            if (!datePattern.test(date)) {
                alert("تاريخ الولادة يجب أن يأخذ الشكل dd-mm-yyyy");
                valid = false;
            }
            // التحقق من رقم الموبايل اذا كان يطابق أرقام شبكتي Syriatel و MTN
            var numberPattern = /^(09|094|095)\d{7}$/;
            if (!numberPattern.test(number)) {
                alert("رقم الموبايل يجب أن يطابق أرقام شبكتي Syriatel و MTN");
                valid = false;
            }
            // التحقق من الايميل اذا كان يحتوي على @ و .
            var emailPattern = /@.*\./;
            if (!emailPattern.test(email)) {
                alert("الايميل يجب أن يحتوي على @ و .");
                valid = false;
            }
            // التحقق من الرمز captcha اذا كان يطابق الرمز الحقيقي
            if (captcha != captchaValue) {
                alert("الرمز captcha غير صحيح");
                valid = false;
            }
       
        function showForm() {
            document.getElementById("purchaseForm").style.display = "block";
            generateCaptcha();
        }
        
        function validateForm() {
            var captchaInput = document.getElementById("captcha").value;
            // قم بتنفيذ الكود الخاص بالتحقق من صحة رمز Captcha هنا
        
            // إظهار نافذة تأكيد
            var confirmation = confirm("تأكيد عملية الشراء؟");
        
            if (confirmation) {
                alert("تمت عملية الشراء بنجاح!");
                return true;
            } else {
                alert("تم إلغاء عملية الشراء.");
                return false;
            }
        }
        
        function generateCaptcha() {
            var captchaText = generateRandomString(6);
            document.getElementById("captcha").value = "";
            document.getElementById("captcha").placeholder = captchaText;
            document.getElementById("captchaImage").src = "https://dummyimage.com/150x50/000/fff&text=" + captchaText;
        }
        
        function generateRandomString(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        
        function changeCaptcha() {
            generateCaptcha();
        }
    }
        function togglePurchaseForm() {
               var purchaseForm = document.getElementById("purchaseForm");
             purchaseForm.classList.toggle("active");
      }
        //////////////////////////////////////////////////
    
        function showForm() {
            document.getElementById("purchaseForm").style.display = "block";
            generateCaptcha();
        }
        
        function validateForm() {
            var captchaInput = document.getElementById("captcha").value;
          
           
        }
        
        function generateCaptcha() {
            var captchaText = generateRandomString(6);
            document.getElementById("captcha").value = "";
            document.getElementById("captcha").placeholder = captchaText;
            document.getElementById("captchaImage") + captchaText;
        }
        
        function generateRandomString(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for (var u = 0; u < length; u ++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        
        function changeCaptcha() {
            generateCaptcha();
        }
 
     