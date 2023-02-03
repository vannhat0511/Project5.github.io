function show(){
    
    var a=`<div class="card" style="width:300px">
        <img class="card-img-top" src="https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg" alt="Card image" style="width:100%;">
        <div class="card-body">
          <h4 class="card-title">Name</h4>
          <p class="card-text"> chuyên khoa nào</p>
          <a  class="btn btn-primary" href="#myModal" data-bs-toggle="modal">Detail</a>
            <a  class="btn btn-success" href="#myModal" data-bs-toggle="modal">order this doctor</a>
        </div>
      </div>
    
      <br>
      <br>
      <style>
      .card-img-top{
        object-fit:cover;
      }
      </style>
   
    <div id="myModal" class="modal fade">
        <div class="modal-dialog">
            <div class="modal-content" style="width:fit-content">
                <div class="card" style="width:400px; height:500px">
                    <img class="card-img-top" src="https://www.fvhospital.com/wp-content/uploads/2018/03/dr-vo-trieu-dat-2020.jpg" alt="Card image" style="width:100%; height:50%;">
                    <div class="card-body">
                      <h4 class="card-title">Name</h4>
                      <p class="card-text">Trình độ học vấn</p>
                      <p class="card-text">chuyên môn</p>
                      <p class="card-text">khoa</p>
                      <p class="card-text">work time</p>
                      <p class="card-text">you can add more information...</p>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">cancel</button>
                    <button type="button" class="btn btn-success">order this doctor</button>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementById('showhere').innerHTML+=a;
}