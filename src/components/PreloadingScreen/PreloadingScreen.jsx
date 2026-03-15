import './PreloadingScreen.css';

const PreloadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="loader"></div>
            <h2>Loading weather...</h2>
        </div>
    );
};

export default PreloadingScreen;