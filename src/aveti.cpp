#include <bits/stdc++.h>
using namespace std;

int long factorial = 1.0;

int fact(int n)
{
    for(int i = 1; i <= n; ++i) {
        factorial *= i;
    }
    return factorial;
}

int result = 1, counter = 0;

int main()
{
    int x;
    cin>>x;
    for(int i = 1; result < 0.000001; i = i + 2){
        
        if(counter%2 == 0)
        {
            result += x^i / fact(i);
            counter  = 1;
        }
        else{
            result -= x^i/fact(i); 
            counter  = 0;
        }
    }
}