//import java.javascript
var isDrawing = false;
var spElement = likeButton.querySelector('.like-span');
// Functions

const likeClick = () => {
    if (isDrawing) {
        isDrawing = false;
        deteteAllFollowers();
        document.removeEventListener("mousemove", createFollowerElement);
    } else {
        isDrawing = true;
        document.addEventListener("mousemove", createFollowerElement);

    }
};

likeButton.addEventListener('click', likeClick);

function createFollowerElement(event) {
    if (isDrawing) {
        var followerElement = document.createElement("div");
        followerElement.className = "follower";
        followerElement.style.left = event.pageX + "px";
        followerElement.style.top = event.pageY + "px";
        document.body.appendChild(followerElement);
    }
}

function deteteAllFollowers(){
    let followers = document.getElementsByClassName("follower");
    while(followers.length) {
        followers[0].parentNode.removeChild(followers[0]);
    }
}