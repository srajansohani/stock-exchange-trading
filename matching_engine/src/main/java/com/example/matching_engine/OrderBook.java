package com.example.matching_engine;

import java.util.HashMap;
import java.util.Map;
import java.util.PriorityQueue;

public class OrderBook {
    private Long stock_id;
    public PriorityQueue<Order> BuyOrders = new PriorityQueue<>(new BuyOrderComparator());
    public PriorityQueue<Order> SellOrders = new PriorityQueue<>(new SellOrderComparator());
    public Map<Long,Integer> orderIndex = new HashMap<>();
    public Long getStock_id() {
        return stock_id;
    }
    public void setStock_id(Long stock_id) {
        this.stock_id = stock_id;
    }
    public PriorityQueue<Order> getBuyOrders() {
        return BuyOrders;
    }
    public void setBuyOrders(PriorityQueue<Order> buyOrders) {
        BuyOrders = buyOrders;
    }
    public PriorityQueue<Order> getSellOrders() {
        return SellOrders;
    }
    public void setSellOrders(PriorityQueue<Order> sellOrders) {
        SellOrders = sellOrders;
    }
    public Map<Long, Integer> getOrderIndex(Map<Long,Integer> orderIndex) {
        return orderIndex;
    }
    public void setOrderIndex(Map<Long, Integer> orderIndex) {
        this.orderIndex = orderIndex;
    }

    public void addOrder(Order order){
        if(order.getType() == 'S'){
            SellOrders.add(order);
        }
        else if(order.getType() == 'B'){
            BuyOrders.add(order);
        }
    }


}
