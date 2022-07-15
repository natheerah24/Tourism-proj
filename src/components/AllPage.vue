<template>
<section class="container">
     <div class="slider">
    <input type="radio" name="slide_switch" id="id1"/>
    <label for="id1">
        <img src="https://i.im.ge/2022/07/08/ukwBGS.jpg" width="100"/>
    </label>
    <img src="https://i.im.ge/2022/07/08/ukwBGS.jpg"/>
    <!--Lets show the second image by default on page load-->
    <input type="radio" name="slide_switch" id="id2" checked="checked"/>
    <label for="id2">
        <img src="https://i.im.ge/2022/07/08/uk6MA6.jpg" width="100"/>
    </label>
    <img src="https://i.im.ge/2022/07/08/uk6MA6.jpg"/>
    <input type="radio" name="slide_switch" id="id3"/>
    <label for="id3">
        <img src="https://i.im.ge/2022/07/08/uk6o1K.jpg" width="100"/>
    </label>
    <img src="https://i.im.ge/2022/07/08/uk6o1K.jpg"/>
    <input type="radio" name="slide_switch" id="id4"/>
    <label for="id4">
        <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg" width="100"/>
    </label>
    <img src="http://thecodeplayer.com/uploads/media/2rT2vdx.jpg"/>
    <input type="radio" name="slide_switch" id="id5"/>
    <label for="id5">
        <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg" width="100"/>
    </label>
    <img src="http://thecodeplayer.com/uploads/media/8k3N3EL.jpg"/>
</div>
    </section>
</template>
<script>
export default {
    name: 'AllPage'
}
</script>
<style>
.slider{
    width: 640px; /*Same as width of the large image*/
    position: relative;
    /*Instead of height we will use padding*/
    padding-top: 320px; /*That helps bring the labels down*/
    margin: 100px auto;
    /*Lets add a shadow*/
    box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.75);
}
.container{
  width: fit-content;
  height: fit-content;
}
/*Last thing remaining is to add transitions*/
.slider>img{
    position: absolute;
    left: 0; top: 0;
    transition: all 0.5s;
}
.slider input[name='slide_switch'] {
    display: none;
}
.slider label {
    /*Lets add some spacing for the thumbnails*/
    margin: 18px 0 0 18px;
    border: 3px solid #999;
    float: left;
    cursor: pointer;
    transition: all 0.5s;
    /*Default style = low opacity*/
    opacity: 0.6;
}
.slider label img{
    display: block;
}
/*Time to add the click effects*/
.slider input[name='slide_switch']:checked+label {
    border-color: #666;
    opacity: 1;
}
/*Clicking any thumbnail now should change its opacity(style)*/
/*Time to work on the main images*/
.slider input[name='slide_switch'] ~ img {
    opacity: 0;
    transform: scale(1.1);
}
/*That hides all main images at a 110% size
On click the images will be displayed at normal size to complete the effect
*/
.slider input[name='slide_switch']:checked+label+img {
    opacity: 1;
    transform: scale(1);
}
</style>








