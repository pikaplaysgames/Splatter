function Post(){
    let post = document.querySelector(".type").value;
    let time = new Date();
    let html = `<section>
        <div class="post-area">
        <div class="post">
            <div class="profile-picture">
                <img src="../images-placeholders/blank.png" alt="spare" class="pp">
            </div>
            <div class="post-text">
                <h4>${post}</h4>
                </div>
        </div>
    <div class="stats">
        <div class="yeah">
            <img src="../images-placeholders/like.png" alt="Yeah!" class="like">
            <p>0</p>
        </div>
        <div class="comments">
            <img src="../images-placeholders/comment.png" alt="comment" class="comment">
            <p>0</p>
        </div>
        <div class="time">
            <p>${time}</p>
        </div>
    </div>
</section>`;
    document.querySelector(".if").innerHTML += html;
    }