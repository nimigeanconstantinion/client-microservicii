import React from "react";
import WrapperTest from "./TestStyle";
import {Popover, PopoverHeader, PopoverProps} from "react-bootstrap";

interface PopoverPropsWithTrigger extends PopoverProps {
}

export const Test = () => {
    const popoverLeft = (
        <Popover id="popover-positioned-left" title="Popover left">
            <PopoverHeader>KLlklk <span className="badge rounded-pill bg-danger">Danger</span></PopoverHeader>
            <strong>Holy guacamole!</strong> Check this info.
            <span className="badge rounded-pill bg-danger">Danger</span>

        </Popover>
    );

    const popoverTop = (
        <Popover id="popover-positioned-top" title="Popover top">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    );

    const popoverBottom = (
        <Popover id="popover-positioned-bottom" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    );

    const popoverRight = (
        <Popover id="popover-positioned-right" title="Popover right">
            <strong>Holy guacamole!</strong> Check this info.
        </Popover>
    );

    return (

        <>


            {/*<ButtonToolbar>*/}
            {/*    <OverlayTrigger trigger="click" placement="left" overlay={popoverLeft}>*/}
            {/*        <Button>Holy guacamole!</Button>*/}
            {/*    </OverlayTrigger>*/}
            {/*    <OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>*/}
            {/*        <Button>Holy guacamole!</Button>*/}
            {/*    </OverlayTrigger>*/}
            {/*    <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>*/}
            {/*        <Button>Holy guacamole!</Button>*/}
            {/*    </OverlayTrigger>*/}
            {/*    <OverlayTrigger trigger="click" placement="right" overlay={popoverRight}>*/}
            {/*        <Button>Holy guacamole!</Button>*/}
            {/*    </OverlayTrigger>*/}
            {/*</ButtonToolbar>*/}

            {/*<WrapperTest>*/}


            {/*    <div className="flip-box">*/}
            {/*        <div className="flip-box-inner">*/}
            {/*            <div className="flip-box-front">*/}
            {/*                <div>*/}
            {/*                    <p>Front test</p>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="flip-box-back">*/}
            {/*                <h2>Paris</h2>*/}
            {/*                <p>What an amazing city</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}


            {/*</WrapperTest>*/}
            {/*<ul className="nav nav-pills">*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className="nav-link active" href="#">Active</a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item dropdown">*/}
            {/*        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"*/}
            {/*           aria-haspopup="true" aria-expanded="false">Dropdown</a>*/}
            {/*        <div className="dropdown-menu" >*/}
            {/*            <h6 className="dropdown-header">Dropdown header</h6>*/}
            {/*            <a className="dropdown-item" href="#">Action</a>*/}
            {/*            <a className="dropdown-item" href="#">Another action</a>*/}
            {/*            <a className="dropdown-item" href="#">Something else here</a>*/}
            {/*            <div className="dropdown-divider"></div>*/}
            {/*            <a className="dropdown-item" href="#">Separated link</a>*/}
            {/*        </div>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className="nav-link" href="#">Link</a>*/}
            {/*    </li>*/}
            {/*    <li className="nav-item">*/}
            {/*        <a className="nav-link disabled" href="#">Disabled</a>*/}
            {/*    </li>*/}
            {/*</ul>*/}
            <WrapperTest>
                <div className={"aside"}>
                    <div className={"commands"}>
                        <ul className="nav nav-pills">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">MicroServices</a>
                            </li>

                            <li className="nav-item qsrv">
                                {/*<a className="nav-link" href="#">Link</a>*/}
                                <div className={"divcc"}>
                                    <div className={"divff"}>
                                        <div className={"dfrontt"}>
                                            <p>Query Action</p>

                                        </div>
                                        <div className={"dbackk"}>
                                            <button type="button" className="btn btn-danger">Refresh List</button>
                                        </div>
                                    </div>

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                                   aria-haspopup="true" aria-expanded="false">Comm Actions</a>
                                <div className="dropdown-menu">
                                    <h6 className="dropdown-header">Actions</h6>
                                    <a className="dropdown-item" href="#">Syncronize</a>
                                    <a className="dropdown-item" href="#">Show All Products</a>
                                    <a className="dropdown-item" href="#">Empty DB</a>
                                    {/*<div className="dropdown-divider"></div>*/}
                                    {/*<a className="dropdown-item" href="#">Separated link</a>*/}
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>

                        </ul>
                    </div>




                </div>
                <div className={"main"}>
                    <div className={"serv"}>
                        <div className={"divcq"}>
                            <div className={"divfq"}>
                                <div className="dfrontq">
                                    <div className="card-header">Query Service</div>
                                    <div className="card-body">
                                        <p className="card-text">Query Products DB from external source.</p>

                                    </div>
                                </div>
                                <div className="dbackq">
                                    <div className="card-header">Status Info</div>
                                    <div className="card-body">
                                        <p className="card-text">We have <span
                                            className="badge bg-primary rounded-pill">14</span> products unsynchronized
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className={"divcq"}>
                            <div className={"divfq"}>
                                <div className={"dfrontq"}>
                                    <div className={"card-header"}>Command Service</div>
                                    <p>This started some actions over an owned DB with declared purpose of
                                        exercising </p>

                                </div>
                                <div className={"dbackq cmddiv"}>
                                    <div className={"card-header"}>Status Info</div>
                                    <p>Owned DB contains <span
                                        className="badge bg-primary rounded-pill">3800</span> products</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
                <div className={"footeras"}>Team Pack </div>
                {/*<div className="flip-box">*/}
                {/*    <div className="flip-box-inner">*/}
                {/*        <div className="flip-box-front">*/}
                {/*            <div>*/}
                {/*                <p>Front test</p>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*        <div className="flip-box-back">*/}
                {/*            <h2>Paris</h2>*/}
                {/*            <p>What an amazing city</p>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="progress">*/}
                {/*<div className="progress-bar bg-danger" role="progressbar"  aria-valuenow="100"*/}
                {/*     aria-valuemin="0" aria-valuemax="100"></div>*/}
                {/*</div>*/}

            </WrapperTest>

        </>


    );
}