import styles from './Projects.module.css';

export const Projects = () => {
    return(
        <div className={styles.categoryGrid }>
            <div className={`card ${styles.card}`}>
                <img className={`card-img-top ${styles.cardImgTop}`} src="/iSABEL logo (dark).png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">iSABEL Project</h5>
                    <p className="card-text">This was my second year group software engineering project to gamify
                        sustainability on our campus using a web scraper Players would earn points by scanning a barcode before
                        throwing away their rubbish.</p>
                    <a href="https://github.com/be-nny/proj-iSABEL" className={`card-link ${styles.cardLink}`}>See inside! <i
                        className="bi bi-box-arrow-up-right"></i></a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><code>Python</code>, <code>CSS</code>, <code>Django</code>, <code>JavaScript</code></li>
                </ul>
            </div>
            <div className={`card ${styles.card}`}>
                <img className={`card-img-top ${styles.cardImgTop}`} src="/keras logo.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Credit Card Default Classifier</h5>
                    <p className="card-text">Uses deep learning to look for credit card defaults. Model was built
                        using sequential layers and trained via a dataset of 30000 entries.</p>
                    <a href="https://github.com/be-nny/CCD-keras" className={`card-link ${styles.cardLink}`}>See inside! <i
                        className="bi bi-box-arrow-up-right"></i></a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><code>Python</code>, <code>Keras</code></li>
                </ul>
            </div>
            <div className={`card ${styles.card}`}>
                <img className={`card-img-top ${styles.cardImgTop}`} src="/java logo.png" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Java Connect 4 Robot</h5>
                    <p className="card-text">Using <code>opencv</code> my friends and I used the vision processing
                        capabilities to detect the different tokens. This would then go into a logic engine, which
                        would them make a move that was sent to an arduino to tell the robot where to drop a token!</p>
                    <a href="https://github.com/be-nny/connect-four-robot" className={`card-link ${styles.cardLink}`}>See inside! <i
                        className="bi bi-box-arrow-up-right"></i></a>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><code>Java</code>, <code>opencv</code>, <code>Arduino</code></li>
                </ul>
            </div>
        </div>
    );
}