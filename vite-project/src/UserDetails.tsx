export function UserDetails() {
    
const details:string="Ez a user details komponens"
const age:number = 26
const isOnline:Boolean =false
let array:string[] = ["pizza", "Hamburger", "Shake"]

return(
<div>
<h1> {details}</h1>
<h1>{age}</h1>
<h1>{isOnline ? "Online" : "Nincs online"}</h1>
<h1>{array}</h1>

</div>

)


}