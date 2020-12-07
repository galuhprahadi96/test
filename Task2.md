# Task 2

#### 1. Make the code below cleaner, better and reusable

```php
# Add leading 0 number
# ex: 5 => 0005
private function convertNumber($number) {
    if (strlen($number) === 1) {
        $number = '000' + $number;
    }else if(strlen($number) === 2) {
        $number = '00' + $number;
    }else if(strlen($number) === 3) {
        $number = '0' + $number;
    }
    return $number;
}

convertNumber(5);
```

#### 2. After change the code, make a pull request
