import { INT_TYPE } from "@angular/compiler/src/output/output_ast";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})


export class CalculatorComponent implements OnInit {

   currentNumber = "0";
   firstOperand = -999;
   operator = "";
   waitForSecondNumber = false;
 
  

  
  public getNumber(v: string) {
    console.log(v);
    if (this.waitForSecondNumber) {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    } else {
      this.currentNumber === "0"
        ? (this.currentNumber = v)
        : (this.currentNumber += v);
    }
  }


  getDecimal() {
    if (!this.currentNumber.includes(".")) {
      this.currentNumber += ".";
    }
  }


  public doCalculation(op: any, secondOp: number) {
    switch (op) {
      case "+":
        return (this.firstOperand += secondOp);
      case "-":
        return (this.firstOperand -= secondOp);
      case "*":
        return (this.firstOperand *= secondOp);
      case "/":
        return (this.firstOperand /= secondOp);
      case "=":
        return secondOp;
       default:
        return 0;
    }
  }


  public getOperation(op: string) {
    console.log(op);

    if (this.firstOperand === -999) {
      this.firstOperand = Number(this.currentNumber);
    } 
    else if (this.operator) {
      const result = this.doCalculation(
        this.operator,
        Number(this.currentNumber)
      );
      this.currentNumber = String(result);
      this.firstOperand = (result);
    }
    this.operator = op;
    this.waitForSecondNumber = true;

    console.log(this.firstOperand);
  }

  
  public clear() {
    this.currentNumber = "0";
    this.firstOperand = -999;
    this.operator = "";
    this.waitForSecondNumber = false;
  }

  constructor() {}

  ngOnInit(): void {}
 }
