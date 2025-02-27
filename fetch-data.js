

async function fetchUserData() {

    
        

        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        const dataContainer = document.getElementById('api-data')
        
        try {


        const response = await fetch(apiUrl)
        
            const users = await response.json();
            dataContainer.innerHTML = '';
    

            let userList = document.createElement('ul')

            users.forEach((user)=>{


                
                let li = document.createElement('li')
                li.innerHTML = user.name;

                userList.appendChild(li)
                

            });
            dataContainer.appendChild(userList)
        


    } catch (error) { 
        dataContainer.innerHTML= 'Failed to load user data.',
        console.error('Error fetching user data', error)
        
    }

   
    
}

document.addEventListener("DOMContentLoaded", fetchUserData)

