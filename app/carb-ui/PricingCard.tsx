import React from "react"
import { Card, Container, Button } from "react-bootstrap"

export function PricingCard() {
  return (
    <Card className="">
      <div className="p-2 bg-info carb-card-header">
        <Card.Subtitle className="text-center mb-2">PlanName</Card.Subtitle>
        <Card.Title className="text-center">Price</Card.Title>
      </div>

      <Card.Body>
        <Card.Text>Perk 1</Card.Text>
        <Card.Text>Perk 2</Card.Text>
        <Button className="mt-3" variant="primary">
          Start Plan
        </Button>
      </Card.Body>
    </Card>
  )
}
