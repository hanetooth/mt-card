# IN PROCESS
# mt-card
Material card with css</br>
# Usage</br>

```
<div class="card card-sm">
  <img src="{{$restaurant->thumb_img_path}}" alt="Restaurant Image" class="card-img">
  <div class="card-container">
      <h4 class="card-title with-action">
          <a href="{{braRoute('restaurants.show',$restaurant->id)}}" class="card-title-text">{{$restaurant->name}}</a>
          <span class="card-action">
              <i class="fa fa-ellipsis-v dropdown-toggle" data-toggle="dropdown"></i>
              <ul class="dropdown-menu">
                  <li>
                      <a href="{{braRoute('restaurants.edit', $restaurant->id)}}">
                          <i class="fa fa-edit"></i> Edit
                      </a>
                  </li>
                  <li>
                      <a class="btn-archive" data-url="{{url('/restaurants', [$restaurant->id])}}">
                          <i class="fa fa-trash"></i> Delete
                      </a>
                  </li>
              </ul>
          </span>
      </h4>
      <p><i class="fa fa-map-pin text-muted margin-r-5"></i> {{$restaurant->address}}</p>
      <p><i class="fa fa-building text-muted margin-r-5"></i> {{$restaurant->building_name}}</p>
  </div>
</div>
```
