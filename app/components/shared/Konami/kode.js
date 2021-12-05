/**
 *
 * ------------------------------------------------------------------------
 *          --------   Konami Kode Komputer Kompliance   --------
 * ------------------------------------------------------------------------
 *
 *
 *     The kontent is kontained within a kollapsed kallout kontainer.
 *          When the korrect kode is klicked on the keyboard and
 *             konfimred by the kompliance komputation method
 *               the kallout kontainer will be konspicuous.
 *
 *                     Kan you rekall the Konami Kode?
 *
 *
 * ------------------------------------------------------------------------
 *          --------   Konami Kode Komputer Kompliance   --------
 * ------------------------------------------------------------------------
 *
 */


import React from "react";
import kustom from "./Konami.module.scss";
import {KODE, KORRECT, KRUMMY, KONSOLE_KAPTION} from "./konstants";


class Konami extends React.Component {

    constructor(props) {
        super(props);

        const kode = KODE;
        const kontents = kode.length;
        this.kountdown = "";
        this.state = {
            kode: kode,
            kontents: kontents,
            kode_konfimred: KRUMMY,
            kounter: 0
        }
        this.konfirm_kode_kompliance = this.konfirm_kode_kompliance.bind(this);
        this.kancel_kode_kompliance = this.kancel_kode_kompliance.bind(this);
    }


    componentDidMount() {
        window.addEventListener("keyup", this.konfirm_kode_kompliance);
    }


    componentWillUnmount() {
        window.removeEventListener("keyup", this.konfirm_kode_kompliance);
        this.klear_kountdown();
    }


    konfirm_kode_kompliance(klickityklick) {
        let {kounter} = this.state;
        const {kode, kontents} = this.state;
        const key_kode = klickityklick.keyCode;
        const kode_kounter = kode[kounter++];

        if (key_kode === kode_kounter) {
            this.setState({
                kounter: kounter
            });

            if (kontents === kounter) {
                this.setState({
                    kode_konfimred: KORRECT,
                    kounter: 0
                }, () => {
                    this.klass_konnection();
                });
            }
        } else {
            this.setState({
                kounter: 0
            });
        }
    }


    kancel_kode_kompliance() {
        this.setState({
            kode_konfimred: KRUMMY
        }, this.klass_kancelled);
    }


    klass_konnection() {
        this.klear_kountdown();
        document.body.classList.add("fixed", "w-full");
    }


    klass_kancelled() {
        this.konsole_kallout();
        this.kountdown = setTimeout(() => document.body.classList.remove("fixed", "w-full"), 1000);
    }


    klear_kountdown() {
        clearTimeout(this.kountdown);
    }


    konsole_kallout() {
        console.log(KONSOLE_KAPTION);
    }


    kaboom(kollection, kombine = " ") {
        return kollection.join(kombine).trim().replace(/\s\s+/g, " ");
    }


    render() {
        const {kode_konfimred} = this.state;
        const klassNames = this.kaboom([kustom.kallout, kode_konfimred ? kustom.konfess : ""]);

        if (kode_konfimred) {
            return (
                <div className={klassNames}>
                    <div className={kustom.kontent}>
                        <p className={kustom.kaption}>THIS WEBSITE WAS DESIGNED AND CREATED BY</p>
                        <a className={kustom.klick} href="https://github.com/briantweed/tailwind-theme-test" target="_blank" rel="noreferrer noopener">briantweed</a>
                        <button onClick={this.kancel_kode_kompliance} className={kustom.kollapse}>click to close</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div/>
            )
        }
    }

}


export default Konami;
