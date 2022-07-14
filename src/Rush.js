import Rush_Poster from './Rush_Poster.png'

const Rush = () => {
    return (
        <div className="Rush">
            <div className="Rush_TopPage">
                <center>
                    <h1>Recruitment</h1>
                    <h2>Welcome to Fall 2022 Rush!</h2>
                </center>
            </div>
            <center>
                <h3 className="Rush_Timeline">Rush Timeline</h3>
                <img className="Rush_Poster" src= {Rush_Poster} alt=""/>
            </center>
        </div>
    );
}

export default Rush;