@extends('layouts.defaultHome')
@section('body')
<!-- Page Content -->
<div class="container">
    <section>
        <div class="row" id="houseslider">
            <div id="housecarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#housecarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#housecarousel" data-slide-to="1"></li>
                    <li data-target="#housecarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img src="/images/51.jpg" alt="">

                        <div class="carousel-caption">

                            <h1>Kitchen</h1>

                        </div>
                    </div>
                    <div class="item">
                        <img src="/images/bathroom.jpg" alt="...">

                        <div class="carousel-caption">

                            <h1>Bathroom</h1>

                        </div>
                    </div>

                    <div class="item">
                        <img src="/images/53.jpg" alt="...">
                        <div class="carousel-caption">

                            <h1>Living Room</h1>

                        </div>
                    </div>

                </div>

                <!-- Controls -->
                <a class="left carousel-control" href="#housecarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="right carousel-control" href="#housecarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>

            <figure class="qualitybadge"><img src="/images/badge.png" height="150" width="auto" /></figure>

        </div>
    </section>
    <section>
        <div class="row" id="details">
            <div class="col-sm-4">



                <div class="panel panel-default">

                    <div class="panel-body">

                        <h2>Price</h2>
                        <hr class="intro-divider" id="longerline" />
                        <h3>Sh {{$property->cost}}</h3>

                    </div>
                </div>



                <div class="panel panel-default">

                    <div class="panel-body">
                        <h2>Details</h2>
                        <hr class="intro-divider" id="longerline" />
                        <p><i class="fa fa-bed fa-4x fa-fw"></i>Bedrooms <i id="number"> &nbsp {{$property->bedrooms}}</i></p>
                        <p><i class="fa fa-cutlery fa-4x fa-fw"></i>Kitchens <i id="number">&nbsp 1</i></p>
                        <p><img src="/images/bath.jpg" height="70" />Bathrooms <i id="number">&nbsp 3</i></p>

                    </div>
                </div>

                <div class="panel panel-default">

                    <div class="panel-body">
                        <h2>Contact Us</h2>
                        <hr class="intro-divider" id="longerline" />
                        <p><i class="fa fa-mobile fa-fw"></i> 0725-380 152 | 0720-926 158</i></p>



                    </div>
                </div>
            </div>
            <div class="col-sm-8">
                <div class="panel panel-default">
                    <div class="panel-body">
                        <h2>Overview</h2>
                        <hr class="intro-divider" />
                        <p>{{$property->description}}
<!--                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.-->
<!--                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,-->
<!--                            when an unknown printer took a galley of type and scrambled it to make a type -->
<!--                            specimen book. It has survived not only five centuries, but also the leap -->
<!--                            into electronic typesetting, remaining essentially unchanged. It was popularised -->
<!--                            in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, -->
<!--                            and more recently with desktop publishing software like Aldus PageMaker including -->
<!--                            versions of Lorem Ipsum-->
                        </p>

                    </div>

                </div><!-- end of panel -->

                <div class="panel panel-default">
                    <div class="panel-body">
                        <h2>Location</h2>
                        <hr class="intro-divider" />
                        <p><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1994.3765902670928!2d36.778029158075874!3d-1.323957489253523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a9e7d287631%3A0x1de848b41caceb2c!2sOtiende+Shopping+Centre!5e0!3m2!1sen!2ske!4v1426336288340" width="100%" height="450" frameborder="0" style="border:0"></iframe></p>

                    </div>

                </div><!-- end of panel -->

            </div>

        </div>

    </section>

</div>
@stop