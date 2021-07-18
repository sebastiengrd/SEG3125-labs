const Search = () => {
    return ( 
        <div className="search" style={{
            display: "flex",
            flexBasis: "auto",
            flexGrow: "1",
        }}>
            <div className="options" style={{
                minWidth: "20vh",

            }}>
                
            </div>
            <div className="results" style={{
                width: "100%",
                borderLeftWidth: "1px",
                borderLeftColor: "black",
                borderLeftStyle: "solid",
            }}>
                yes
            </div>
        </div>
     );
}
 
export default Search;