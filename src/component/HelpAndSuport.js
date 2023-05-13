import React from 'react'
import Card from 'react-bootstrap/Card';
import './help.css'
const HelpAndSuport = () => {
    return (
        <>
            <h2>How Can I help you?</h2>
            <div className="help d-flex justify-content-between">

                <Card style={{ width: '18rem' }} className="support">
                    <Card.Body>
                        <Card.Title>help from social media</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">read document</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="www.facebook.com">facebook</Card.Link>
                        <Card.Link href="www.google.com">Google</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="support">
                    <Card.Body>
                        <Card.Title>help from expert</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">connect with expert</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="www.facebook.com">facebook</Card.Link>
                        <Card.Link href="www.google.com">Google</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className="support">
                    <Card.Body>
                        <Card.Title>help from developer</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">help by developer</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="www.facebook.com">facebook</Card.Link>
                        <Card.Link href="www.google.com">Google</Card.Link>
                    </Card.Body>
                </Card>


            </div>
        </>
    )
}

export default HelpAndSuport
