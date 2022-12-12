import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.css']
})
export class ProductsHeaderComponent implements OnInit {
  sort = 'desc'
  itemsShowCount = 12
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() itemsCountChange = new EventEmitter<number>()
  @Output() sortCountChange = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort: string): void {
    this.sort = newSort
    this.sortCountChange.emit(newSort)
  }

  onItemsUpdated(count: number): void {
    this.itemsShowCount = count
    this.itemsCountChange.emit(count)
  }

  onColumnsUpdated(colNum: number): void {
    this.columnsCountChange.emit(colNum)
  }

}
