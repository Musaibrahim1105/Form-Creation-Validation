

async function fetchUserData() {

    try {
        

        const apiUrl = await fetch('https://jsonplaceholder.typicode.com/users');
        if(apiUrl.ok){
            const users = await apiUrl.json();

            //console.log(users)
            

            const dataContainer = document.getElementById('api-data')
            dataContainer.innerHTML = '';

            let userList = document.createElement('ul')

            users.forEach((user)=>{


                
                let li = document.createElement('li')
                li.innerHTML = user.name;

                userList.appendChild(li)
                

            });
            dataContainer.appendChild(userList)
        }


    } catch (error) { 
        dataContainer.innerHTML= ' failed to load user data.'
        console.error('Error fetching user data', error)
        
    }

   
    
}

document.addEventListener("DOMContentLoaded", fetchUserData)

