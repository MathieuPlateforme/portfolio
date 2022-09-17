import './style/BeautifulScreen.css';

function BeautifulScreen({calcule, result})
{
       return(
        <section className='screen'>
            <p>{result > 9000 ? "OVER 9000" : result}</p>
            <p>{calcule === "" ? '0': calcule}</p>
        </section>
    )
}

export default BeautifulScreen