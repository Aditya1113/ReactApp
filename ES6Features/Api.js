const api_url = 'https://jsonplaceholder.typicode.com/users'

// function getApiData(url){

//     fetch(url)
//     .then((response)=> response.json())
//     .then((data)=>console.log(data))   // json data as a response
//     .catch((err)=>console.log(err))

// }

let getRemoteData = async (apiurl)=>{
   
        let response = await fetch(api_url)

        let ans = await response.json()

        // console.log("ans",ans);

        appendToHtml(ans)
}

getRemoteData(api_url)

let appendToHtml=(data) =>{

    for(let users of data){

        let tr = document.createElement('tr')
        let td_1 = document.createElement('td')
        let td_2 = document.createElement('td')

        td_1.innerHTML = `${users.name}`
        td_2.innerHTML = `${users.email}`

        tr.appendChild(td_1)
        tr.appendChild(td_2)

        document.getElementById('myTable').appendChild(tr)

    }

}

// Assignment 

// https://randomuser.me/api/?results=10

// Name,Email,Username