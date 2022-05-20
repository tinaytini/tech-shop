import scss from './features.module.scss';


import feature1 from '../../assets/images/feature1.png';
import feature2 from '../../assets/images/image 17.png';
import feature3 from '../../assets/images/feature3.png';
import feature4 from '../../assets/images/feature4.png';
import clsx from 'clsx';

function Features() {
    return (
        <div className={scss.features}>
            <div className="container">
                <div className="content">
                    <div className={scss.top}>
                        <h1 className={scss.title}>Features</h1>
                        <p className={scss.subtitle}>The MPG series brings out the best in gamers by allowing full expression in color with advanced RGB lighting control and synchronization.</p>
                    </div>
                    <ul className={scss.bottom}>
                        <li className={scss.item1}>
                            <span>
                                <img src={feature1} alt="feature" />
                            </span>

                            <p>Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        </li>
                        <li className={scss.item2}>
                            <span>
                                <img src={feature2} alt="feature" />
                            </span>
                            <p>The new GeForce® RTX SUPER™ Series has more cores and higher clocks for superfast performance compared to previous-gen GPUs.</p>
                        </li>
                        <li className={scss.item3}>
                            <span>
                                <img src={feature3} alt="feature" />
                            </span>
                            <p>Unleash the full potential with the latest SSD technology, the NVM Express. 6 times faster than traditional SATA SSD.</p>
                        </li>
                        <li className={scss.item4}>
                            <span>
                                <img src={feature4} alt="feature" />
                            </span>
                            <p>Featuring the latest 10th Gen Intel® Core™ processors, memory can support up to DDR4 2933MHz to delivers an unprecedented gaming experience.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;