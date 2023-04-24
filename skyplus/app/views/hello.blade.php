@extends('layouts.defaultHome')
@section('body')
<div class="row" id="intro-header">
    <div class="col-md-12">
        <div id="mainskyplusslider" class="carousel slide" data-ride="carousel" date-interval="1500">
            <!-- Indicators -->
            <ol class="carousel-indicators">
                <li data-target="#mainskyplusslider" data-slide-to="0" class="active"></li>
                <li data-target="#mainskyplusslider" data-slide-to="1"></li>
                <li data-target="#mainskyplusslider" data-slide-to="2"></li>
            </ol>

            <!-- Wrapper for slides -->
            <div class="carousel-inner" role="listbox">
                <div class="item active" id="slider0">


                    <div class="carousel-caption">

                        <img src="images/skyplus_only.png" height="300" width="auto" alt="">
                        <h1 id="mainH1" align="center">Real Estate consultancy firm</h1>

                    </div>

                </div>

                <div class="item" id="slider1">
                    <div id="greyoverlay">

                        <div class="carousel-caption">
                            <h1 align="center">VISION</h1>
                            <hr class="intro-divider" id="line"/>

                            <h4>To create a distinguished customer loyalty and bring value to our clients using the most innovative technology</h4>
                        </div>
                    </div><!-- end of grey overlay -->
                </div>
                <div class="item" id="slider2">
                    <div id="greyoverlay">

                        <div class="carousel-caption">
                            <h1 align="center">MISSION</h1>
                            <hr class="intro-divider" id="line"/>
                            <h4>To become Kenya’s leading provider of first-hand information and solutions in the Real Estate Industry with a lasting impact on our clients.
                            </h4>
                        </div>
                    </div><!-- end of grey overlay -->
                </div>


            </div>

            <!-- Controls -->
            <a class="left carousel-control" href="#mainskyplusslider" role="button" data-slide="prev">
                <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#mainskyplusslider" role="button" data-slide="next">
                <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</div>
<div class="row" id="housetype">
    <div class="container">

        <div class="col-md-6 animated fadeInLeftBig" id="rent">
            <div id="shade">

                <div class="mytitle">

                    <div class="btn btn-primary btn-lg" id="rentalbtn">Rental</div>
                </div>
            </div>
        </div>


        <div class="col-md-6 animated fadeInRightBig" id="sale">
            <div id="shade">

                <div class="mytitle">
                    <div class="btn btn-primary btn-lg" id="salebtn">For Sale</div>
                </div>

            </div>
        </div>
    </div>


</div>

<!-- Latest properties -->

<div class="row" id="latest">

    <h1 align="center">Latest Properties</h1>


    <hr class="intro-divider" />



<!--    <div class="col-md-3 animated rollIn">-->
<!--        <div clas="thumbnail">-->
<!--            <div id="main">-->
<!---->
<!--                <div id="myimage">-->
<!--                    <img src="images/4.jpg" />-->
<!--                </div>-->
<!--                <div id="mydescription">-->
<!--                    <h4>4 Bdr Karen Nairobi</h4>-->
<!--                    <h4>Sh 5.3 Million</h4>-->
<!--                </div>-->
<!--                <div id="mybuttons">-->
<!--                    <a class="btn btn-primary" id="viewbtn">View More</a>-->
<!--                </div>-->
<!--                <div id="ribbon">-->
<!--                    <h4>New</h4>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    @if(count($assets))
    @foreach($assets as $asset)
    <div class="col-md-3">
        <div clas="thumbnail">
            <div id="main">
                <div id="myimage">
                    {{ HTML::image($asset->name, $asset->property->property_name) }}
                </div>
                <div id="mydescription">
                    <h4>{{Str::limit($asset->property->description, 30)}}</h4>
                    <h4>{{$asset->property->cost}}</h4>
                    <h4>{{$asset->name}}</h4>
                </div>
                <div id="mybuttons">
<!--                    <a class="btn btn-primary" id="viewbtn">-->
                        {{ link_to_route('property.view','View More' , array($asset->property->id)
                        , array('class' => 'btn btn-primary', 'id'=>'viewbtn')) }}
<!--                    </a>-->

                </div>
                <div id="ribbon">
                    <h4>New</h4>
                </div>
            </div>
        </div>
    </div>
    @endForeach
    @endif
</div><!-- end of row -->
@stop

