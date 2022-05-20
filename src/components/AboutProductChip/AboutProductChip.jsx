import scss from './aboutProductChip.module.scss';
import chip from '../../assets/images/chip.png'


function AboutProductChip() {
    return (
            <div className={scss.aboutChip}>
                <div className={scss.left}>
                    <div className={scss.content}>
                        <h1>Outplay the Competittion</h1>
                        <p>Experience a 40% boost in computing from last generation. MSI Desktop equips the 10th Gen. Intel® Core™ i7 processor with the upmost computing power to bring you an unparalleled gaming experience.</p>
                        <p>*Performance compared to i7-9700. Specs varies by model.</p>
                    </div>
                </div>
                <div className={scss.right}>
                    <img src={chip} alt="" className={scss.img} />

                </div>
            </div>

    )
}

export default AboutProductChip;