function StudentCard({name,age,grade}){
    return(
        <div>
            <div class="card">
            <h2 class="name">Name:{name}</h2>
            <p class="age">Marks:{age}</p>
            <p class="grade">Grade:{grade}</p>
            </div>
        </div>
    );
}
export default StudentCard;