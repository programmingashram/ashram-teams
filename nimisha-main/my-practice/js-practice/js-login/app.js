var body = document.getElementById('body');

function section() {
    var container = document.createElement('div');
    body.appendChild(container);
    container.setAttribute('class', 'container');

    function box() {
        var row = document.createElement('div');
        container.appendChild(row);
        row.setAttribute('class', 'row');

        function col1() {
            var left = document.createElement('div');
            row.appendChild(left);
            left.setAttribute('class', 'left');

            left.innerHTML = `
            <div class="log-head">
                <div class="back">
                    <a href="#">Back</a>
                </div>
                <div class="newt">
                    <a href="#">New traveler</a>
                </div>
            </div>
        <div class="log-page">
            <div class="log-heading">
                <h2>Explore trave destinations</h2>
                <p>The best place for your wild adventures.</p>
            </div>
            <div class="input-section">
                <div class="grid">
                    <div class="col-md-6">
                        <input type="text" name="name" id="name" placeholder="Name">
                        <hr>
                    </div>
                    <div class="col-md-6">
                        <input type="text" name="contry" id="contry" placeholder="Contry">
                        <hr>
                    </div>
                </div>
                <div class="e-section">
                    <input type="email" name="email" id="email" placeholder="Email">
                    <hr>
                </div>
                <div class="pass-section">
                    <input type="password" name="password" id="password" placeholder="Create Password">
                    <hr>
                </div>
            </div>
            <div class="btn-section">
                <a href="#" type="button" id="btn">Sign up</a>
            </div>
        </div>
            `

        } col1()

        function col2() {
            var right = document.createElement('div');
            row.appendChild(right);
            right.setAttribute('class', 'right');

            right.innerHTML = `
            <div class="right-content">
                <div class="queto">
                    <p>
                        Great things never came<br> from comfort zones.
                    </p>
                </div>
            </div>
            `

        } col2()

    } box()

} section()

