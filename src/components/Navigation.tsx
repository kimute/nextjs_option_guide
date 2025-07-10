import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";

/**
 * 공통 네비게이션 컴포넌트
 * 모든 페이지에서 사용할 수 있는 상단 메뉴
 */
export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* 로고 */}
          <Link href="/" className="flex items-center space-x-2">
            <HomeIcon className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">
              Next.js 가이드북
            </span>
          </Link>

          {/* 메뉴 */}
          <div className="flex space-x-6">
            <Link 
              href="/options/typescript" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              TypeScript
            </Link>
            <Link 
              href="/options/tailwind" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Tailwind CSS
            </Link>
            <Link 
              href="/options/eslint" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              ESLint
            </Link>
            <Link 
              href="/options/app-router" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              App Router
            </Link>
            <Link 
              href="/options/src-dir" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              src 디렉토리
            </Link>
            <Link 
              href="/options/turbo" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Turbopack
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}