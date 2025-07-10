import Navigation from "@/components/Navigation";
import { PaintBrushIcon, SwatchIcon, SparklesIcon } from "@heroicons/react/24/outline";

/**
 * Tailwind CSS 옵션 상세 페이지
 * 비개발자도 쉽게 이해할 수 있도록 비유와 예시를 포함
 */
export default function TailwindPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 헤더 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <PaintBrushIcon className="h-12 w-12 text-pink-600 mr-4" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tailwind CSS</h1>
              <p className="text-lg text-gray-600">웹사이트 꾸미기의 혁신</p>
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-pink-900 mb-3">
              🎨 미술 도구 비유로 이해하기
            </h2>
            <p className="text-pink-800 leading-relaxed">
              기존 CSS가 <strong>물감과 붓으로 직접 그리기</strong>라면, 
              Tailwind CSS는 <strong>스티커와 도장으로 꾸미기</strong>입니다. 
              미리 만들어진 예쁜 스티커들을 조합해서 빠르게 멋진 작품을 만들 수 있어요!
            </p>
          </div>
        </div>

        {/* 기본 설명 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🤔 Tailwind CSS가 뭔가요?
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Tailwind CSS는 웹사이트를 <strong>&ldquo;예쁘게 꾸미는&rdquo;</strong> 새로운 방법입니다. 
              마치 레고 블록처럼 작은 스타일 조각들을 조합해서 
              원하는 디자인을 빠르게 만들 수 있습니다.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🧩 레고 블록 비유:</h3>
              <p className="text-gray-700">
                레고로 집을 만들 때 벽돌 하나하나를 직접 만들지 않고, 
                이미 만들어진 블록들을 조합하는 것처럼, 
                Tailwind CSS도 미리 만들어진 스타일 블록들을 조합해서 사용합니다.
              </p>
            </div>
          </div>
        </div>

        {/* 전통적인 방법 vs Tailwind 비교 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 전통적인 CSS */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SwatchIcon className="h-8 w-8 text-orange-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">전통적인 CSS</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-green-400 font-mono text-sm">
{`.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
}`}
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                🕐 <strong>시간:</strong> 스타일 파일을 따로 만들고 연결해야 함<br/>
                📝 <strong>복잡도:</strong> 클래스 이름을 직접 정해야 함
              </p>
            </div>
          </div>

          {/* Tailwind CSS */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-8 w-8 text-pink-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-900">Tailwind CSS</h3>
            </div>
            
            <div className="space-y-3">
              <div className="bg-gray-900 rounded-lg p-3">
                <pre className="text-green-400 font-mono text-sm">
{`<button class="bg-blue-500 text-white 
               px-5 py-2 rounded 
               hover:bg-blue-600">
  클릭하세요
</button>`}
                </pre>
              </div>
              <p className="text-gray-600 text-sm">
                ⚡ <strong>빠름:</strong> HTML에서 바로 스타일 적용<br/>
                🎯 <strong>직관적:</strong> 클래스 이름이 기능을 명확히 설명
              </p>
            </div>
          </div>
        </div>

        {/* 실제 버튼 예제 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🎯 실제 버튼 예제
          </h2>
          
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">이 버튼들은 모두 Tailwind CSS로 만들어졌습니다:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                  기본 버튼
                </button>
                <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors">
                  둥근 버튼
                </button>
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all">
                  그라데이션 버튼
                </button>
                <button className="border-2 border-gray-500 text-gray-700 px-6 py-2 rounded hover:bg-gray-100 transition-colors">
                  테두리 버튼
                </button>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">🔍 코드 분석:</h3>
              <ul className="text-gray-700 space-y-1 text-sm">
                <li>• <code className="bg-gray-200 px-1 rounded">bg-blue-500</code> = 파란색 배경</li>
                <li>• <code className="bg-gray-200 px-1 rounded">text-white</code> = 흰색 글자</li>
                <li>• <code className="bg-gray-200 px-1 rounded">px-6 py-2</code> = 좌우 여백 6, 위아래 여백 2</li>
                <li>• <code className="bg-gray-200 px-1 rounded">rounded</code> = 둥근 모서리</li>
                <li>• <code className="bg-gray-200 px-1 rounded">hover:bg-blue-600</code> = 마우스 올렸을 때 더 진한 파란색</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 장점 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            ✨ Tailwind CSS의 장점
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🚀</span>
                <div>
                  <h3 className="font-semibold text-gray-900">빠른 개발</h3>
                  <p className="text-gray-600 text-sm">CSS 파일을 따로 만들 필요 없이 HTML에서 바로 스타일링</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🎯</span>
                <div>
                  <h3 className="font-semibold text-gray-900">직관적</h3>
                  <p className="text-gray-600 text-sm">클래스 이름만 봐도 어떤 스타일인지 바로 알 수 있음</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">📱</span>
                <div>
                  <h3 className="font-semibold text-gray-900">반응형 디자인</h3>
                  <p className="text-gray-600 text-sm">컴퓨터, 태블릿, 모바일에 맞게 자동 조정</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🎨</span>
                <div>
                  <h3 className="font-semibold text-gray-900">일관된 디자인</h3>
                  <p className="text-gray-600 text-sm">미리 정의된 색상과 크기로 통일감 있는 디자인</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">🔧</span>
                <div>
                  <h3 className="font-semibold text-gray-900">쉬운 수정</h3>
                  <p className="text-gray-600 text-sm">CSS 파일을 찾아갈 필요 없이 HTML에서 바로 수정</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-green-600 mr-2 text-xl">📦</span>
                <div>
                  <h3 className="font-semibold text-gray-900">작은 파일 크기</h3>
                  <p className="text-gray-600 text-sm">사용하지 않는 스타일은 자동으로 제거</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 사용 방법 */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            🚀 사용 방법
          </h2>
          
          <div className="space-y-6">
            <div className="bg-pink-50 rounded-lg p-4">
              <h3 className="font-semibold text-pink-900 mb-2">
                1️⃣ 자동 설정 (권장)
              </h3>
              <p className="text-pink-800 mb-3">
                create-next-app을 사용하면 Tailwind CSS가 자동으로 설정됩니다.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-app --tailwind
                </code>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-purple-900 mb-2">
                2️⃣ 대화형 설정
              </h3>
              <p className="text-purple-800 mb-3">
                명령어 실행 후 &ldquo;Tailwind CSS를 사용하시겠습니까?&rdquo;에서 <strong>Yes</strong>를 선택하세요.
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-green-400 font-mono">
                  npx create-next-app@latest my-app
                </code>
              </div>
            </div>
            
            <div className="bg-green-50 rounded-lg p-4">
              <h3 className="font-semibold text-green-900 mb-2">
                3️⃣ 학습 팁
              </h3>
              <ul className="text-green-800 space-y-1">
                <li>• 공식 문서의 예제를 따라해보세요</li>
                <li>• 간단한 버튼부터 시작해보세요</li>
                <li>• 브라우저 개발자 도구로 결과를 확인해보세요</li>
                <li>• 조금씩 복잡한 컴포넌트에 도전해보세요</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 결론 */}
        <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">
            💡 결론
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Tailwind CSS는 <strong>디자인 초보자도 쉽게 사용할 수 있는</strong> 현대적인 CSS 프레임워크입니다. 
            복잡한 CSS 문법을 몰라도 예쁜 웹사이트를 만들 수 있어요!
          </p>
          <div className="bg-white/20 rounded-lg p-4">
            <p className="font-semibold">
              🎨 초보자 추천: Tailwind CSS를 사용해보세요! 
              디자인이 훨씬 쉬워집니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}