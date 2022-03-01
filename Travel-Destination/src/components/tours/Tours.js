const Tours = (props) =>{
    return(
        <>
        {
            props.tours.map(tour => {
                return(
                    <div> 
                        <h3>{tour.name}</h3>
                        <img src={tour.image} alt="" />                                                                      
                    </div>
                )
                
            })
        }
        </>
        
        
    )
};

export default Tours;