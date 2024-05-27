package com.example.matching_engine;
import java.util.Comparator;
public class SellOrderComparator implements Comparator<Order> {
    @Override
    public int compare(Order a,Order b){
        if(a.getLimit_price() > b.getLimit_price()){
            return 1;
        }
        return -1;
    }
}
