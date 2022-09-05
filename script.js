var calculate_btn=document.getElementById('calculate_btn'),
    calculate_age=document.getElementById('calculate_age');
calculate_btn.addEventListener('click',function()
{
    var birth_date=document.getElementById('birth_date').value;
    birth_date=new Date(birth_date);
    var todayDate=new Date();
    totalAge=Date.now()-birth_date.getTime();
    ageYear=new Date(totalAge);
    ageYear=ageYear.getUTCFullYear() - 1970;
        function ageMonth()
    {
        if(todayDate.getMonth()>=birth_date.getMonth())
        {
            if(todayDate.getDate()>=birth_date.getDate())
            {
                return todayDate.getMonth()-birth_date.getMonth();
            }
            else if(todayDate.getMonth()-1>=birth_date.getMonth())
            {
                return (todayDate.getMonth()-1)-birth_date.getMonth();
            }
            else
            {
                return (todayDate.getMonth()-1+12)-birth_date.getMonth();
            }
        }
        else
        {
            return (todayDate.getMonth()-1+12)-birth_date.getMonth();
        }
    }
    function ageDay()
    {
        if(todayDate.getDate()>birth_date.getDate())
        {
            return todayDate.getDate()-birth_date.getDate()
        }
        else if(todayDate.getDate()==birth_date.getDate())
        {
            return todayDate.getDate()-birth_date.getDate()
        }
        else
        {
            var calDate=new Date(birth_date.getUTCFullYear(),birth_date.getMonth(),0);
            return (todayDate.getDate()+calDate.getDate())-birth_date.getDate();
        }
    }
    if(ageYear<0)
    {
        calculate_age.innerHTML="Your Age "
        alert("Person is not born!");
    }
    else
    {
        calculate_age.innerHTML="Your Age "+ageYear+" Years "+ageMonth()+" Months "+ageDay()+" Days"
    }
})