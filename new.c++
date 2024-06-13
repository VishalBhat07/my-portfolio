#include <iostream>

using namespace std;

int modpower(int x, int n, int m)
{
    if (n == 0)
        return 1 % m;
    long long u = modpower(x, n / 2, m);
    u = (u * u) % m;
    if (n % 2 == 1)
        u = (u * x) % m;
    return u;
}

int main()
{
    cout << modpower(36, 233, 100) << endl;
    return 0;
}
