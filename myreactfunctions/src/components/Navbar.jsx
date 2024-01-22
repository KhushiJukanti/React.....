import { Link } from "react-router-dom"
function NavBar() {

    return (
        <nav class="navbar navbar-expand-lg bg-warning ">
            <div class="container">
                <Link to="home" class="navbar-brand">Logo</Link>
                {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button> */}
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="home">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="allhook">All Hook Demo</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="userscrud">Users Crud</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="Todo's App">Todo</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="createuser">Create User</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="contactlist">Contact List</Link>
                        </li>

                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to="counterusingreducer">CounterUsing Reducer</Link>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar