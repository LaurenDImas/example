<template> 
    <div class="row">
        <div class="col-lg-12 mt-2">
            <div class="box">
                <div class="box-body">
                    <div class="row">
                        <div class="col-12" style="margin-bottom:30px; margin-top:0px;">
                            <div class="content-header p-0">
                                <div class="d-flex align-items-center">
                                    <div class="mr-auto">
                                        <h3 class="page-title">Details</h3>
                                        <div class="d-inline-block align-items-center">
                                            <nav>
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item">
                                                        <router-link :to="{ name: 'home'}">
                                                            <i class="mdi mdi-home-outline"></i>
                                                        </router-link>
                                                    </li>
                                                    <li class="breadcrumb-item" aria-current="page">
                                                        <router-link :to="{ name: 'design'}">
                                                            Design
                                                        </router-link>
                                                    </li>
                                                    <li class="breadcrumb-item active" aria-current="page">
                                                        {{ capital }}
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5 col-sm-6">
                            <div class="box box-body b-1 text-center no-shadow">
                                <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20091%20%E2%80%93%20Desain%20Rumah%20Bapak%20Hari%20%E2%80%93%20Ciracas-01.webp" id="product-image" class="img-fluid" alt="" />
                            </div>
                            <div class="pro-photos">
                                <div class="photos-item item-active">
                                    <img src="https://bintoroarchitect.co.id/media/Thumbnail%20Project%20091%20%E2%80%93%20Desain%20Rumah%20Bapak%20Hari%20%E2%80%93%20Ciracas-01.webp" alt="" style="height:50px!important;" >
                                </div>
                                <div class="photos-item">
                                    <img src="https://bintoroarchitect.co.id/media/Desain%20Rumah%20Bp%20Ifael%20Ciracas%20%282%29.webp" alt="" style="height:50px!important;" >
                                </div>
                                <div class="photos-item">
                                    <img src="https://bintoroarchitect.co.id/media/Desain%20Rumah%20Bp%20Ifael%20Ciracas%20%283%29.webp" alt="" style="height:50px!important;" >
                                </div>
                                <div class="photos-item">
                                    <img src="https://bintoroarchitect.co.id/media/Desain%20Rumah%20Bp%20Ifael%20Ciracas%20%281%29.webp" alt="" style="height:50px!important;" >
                                </div>
                            </div>
                            <div class="clear"></div>
                        </div>
                        <div class="col-md-7 col-sm-6">
                            <h2 class="box-title mt-0">Product Title</h2>
                            <div class="list-inline">
                                <a class="text-warning"><i class="mdi mdi-star"></i></a>
                                <a class="text-warning"><i class="mdi mdi-star"></i></a>
                                <a class="text-warning"><i class="mdi mdi-star"></i></a>
                                <a class="text-warning"><i class="mdi mdi-star"></i></a>
                                <a class="text-warning"><i class="mdi mdi-star"></i></a>
                            </div>
                            <h1 class="pro-price mb-0 mt-20">&#36;270
                                <span class="old-price">&#36;540</span>
                                <span class="text-danger">50% off</span>
                            </h1>
                            <hr>
                            <p>Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. but the majority have suffered alteration in some form, by injected humour</p>
                            <!-- <div class="row">
                                <div class="col-sm-12">
                                    <h6>Color</h6>
                                    <div class="input-group">
                                        <ul class="icolors">
                                            <li class="bg-danger rounded-circle"></li>
                                            <li class="bg-info rounded-circle"></li>
                                            <li class="bg-primary rounded-circle active"></li>
                                        </ul>
                                    </div>
                                    <h6 class="mt-20">Available Size</h6>
                                    <p class="mb-0">
                                        <span class="badge badge-pill badge-lg badge-default">S</span>
                                        <span class="badge badge-pill badge-lg badge-default">M</span>
                                        <span class="badge badge-pill badge-lg badge-default">L</span>
                                    </p>
                                </div>
                            </div> -->
                            <hr>
                            <!-- <div class="gap-items">
                                <button class="btn btn-success"><i class="mdi mdi-shopping"></i> Buy Now!</button>
                                <button class="btn btn-primary"><i class="mdi mdi-cart-plus"></i> Add To Cart</button>
                                <button class="btn btn-infomr"><i class="mdi mdi-compare"></i> Compare</button>
                                <button class="btn btn-danger"><i class="mdi mdi-heart"></i> Wishlist</button>
                            </div> -->
                            <h4 class="box-title mt-20">Key Highlights</h4>
                            <ul class="list-icons">
                                <li><i class="fa fa-check text-danger float-none"></i> Party Wear</li>
                                <li><i class="fa fa-check text-danger float-none"></i> Nam libero tempore, cum soluta nobis est</li>
                                <li><i class="fa fa-check text-danger float-none"></i> Omnis voluptas as placeat facere possimus omnis voluptas.</li>
                            </ul>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <h4 class="box-title mt-40">General Info</h4>
                            <div class="table-responsive">
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <td width="390">Brand</td>
                                            <td> Brand Name </td>
                                        </tr>
                                        <tr>
                                            <td>Delivery Condition</td>
                                            <td> Lorem Ipsum </td>
                                        </tr>
                                        <tr>
                                            <td>Type</td>
                                            <td> Party Wear </td>
                                        </tr>
                                        <tr>
                                            <td>Style</td>
                                            <td> Modern </td>
                                        </tr>
                                        <tr>
                                            <td>Product Number</td>
                                            <td> FG1548952 </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>				
            </div>
        </div>
    </div>
</template>
<script>
import $ from 'jquery';
export default {
    data(){
        return {
            breadcrumb: null
        }
    },
    computed: {
        capital() {
           console.log(this.breadcrumb);
           return this.breadcrumb.toLowerCase()
                    .split(' ')
                    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
        }
    },
    beforeMount(){
        this.breadcrumb = this.$route.params.slug.replaceAll("-"," ");
    },
    mounted(){
        $('.icolors li').on("click", function() {
            $('.icolors li').removeClass('active');
            $(this).addClass('active');
        });

        $('.photos-item').on("click", function() {
            var src = $(this).children().attr('src');
            $('#product-image').attr('src', src);
            $('.photos-item').removeClass('item-active');
            $(this).addClass('item-active');
        });	
    }
}
</script>