package com.example.matching_engine;

public class Order implements Comparable<Order> {
    private Long id;
    private Long limit_price;
    private char type;
    private Long stock_id;
    private Long quantity;
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public Long getLimit_price() {
        return limit_price;
    }
    public void setLimit_price(Long limit_price) {
        this.limit_price = limit_price;
    }
    public char getType() {
        return type;
    }
    public void setType(char type) {
        this.type = type;
    }
    public Long getStock_id() {
        return stock_id;
    }
    public void setStock_id(Long stock_id) {
        this.stock_id = stock_id;
    }
    public Long getQuantity() {
        return quantity;
    }
    public void setQuantity(Long quantity) {
        this.quantity = quantity;
    }
    public Order(Long id, Long limit_price, char type, Long stock_id, Long quantity) {
        this.id = id;
        this.limit_price = limit_price;
        this.type = type;
        this.stock_id = stock_id;
        this.quantity = quantity;
    }
    @Override
    public int compareTo(Order o){
        return o.id > this.id ? 1 : -1;
    }
}
