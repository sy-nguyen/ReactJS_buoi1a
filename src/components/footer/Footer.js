import "./footer.css"

function Footer(props){
    const x = 5
    const {name1, age1} = props;
    const arr = [{name:"Lê Mèo",age:2},{name:"Nguyễn Nai",age:3},{name:"Trần Thỏ",age:4}]
    return(
        <>
            <div className = "footer" id="footer_1">
                Foorter 1
                <h2>
                    X = {x}
                </h2>
            </div>
            <div className = "footer" id="footer_2">
                Foorter 2
                <h2>
                    Tên là: {name1}
                </h2>
                <h2>
                Tuổi là: {age1}
                </h2>
                {
                    arr&&arr.map((item,index)=>(<p key={index}>{item.name}</p>))
                }
            </div>
            
        </>
    )
}

export default Footer;