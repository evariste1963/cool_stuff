<script>
import img1 from '$lib/images/img1.jpg'
import img2 from '$lib/images/img2.jpg'
import img3 from '$lib/images/img3.jpeg'
import img4 from '$lib/images/img4.jpg'
</script>


<div class="slider">
    <figure>
        <div class="slide">
            <img src={img1} alt="the ninkinonk">
        </div>
        <div class="slide">
            <img src={img2} alt="Noo Noos">
        </div>
        <div class="slide">
            <img src={img3} alt="little bear">
        </div>
        <div class="slide">
            <img src={img4} alt="Reuben">
        </div>
    </figure>
</div>


<style>
.slider {
    overflow:hidden;
    height: 350px;
 }

 .slider figure div {
    width: 25%;
    float: left;
 }
.slider figure img {
    width: 100%;
    float: left;
}

.slider figure {
    position: relative;
    width: 400%;
    margin: 0;
    left:0;
    animation: 30s slidify infinite;
}

@keyframes slidify{
    0% {
        left: 0%
    }

    12% {
        left: 0%;
    }

    24% {
        left: -100%
    }

    36% {
        left: -100%
    }

    38% {
        left: -200%
    }

    50% {
        left: -200%;
    }

    52% {
        left: -300%;
    }

    64% {
        left: -300%
    }

    66% {
        left: -200%
    }

    78% {
        left: -200%
    }

    90% {
        left: -100%
    }

    92% {
        left: -100%
    }

    94% {
        left: 0%;
    }
    

}

</style>